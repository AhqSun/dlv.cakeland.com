/// <reference path="D:\cakeland\admin.cakeland.com\bower_components/q/q.js" />
define('utils', [], function () {
    return {
        combilePath: function () {
            var path = (arguments[0] || "").toString();
            for (var i = 1; i < arguments.length; i++) {
                var append = (arguments[i] || "").toString();
                if (append.length) {
                    if (path[path.length - 1] === "/" && append[0] === "/") {
                        path = path.substring(0, path.length - 1) + append;
                    }
                    else if (path[path.length - 1] !== "/" && append[0] !== "/") {
                        path = path + "/" + append;
                    }
                    else {
                        path += append;
                    }
                }
            }
            return path;
        },
        paramsFromRoute: function (path) {
            var reg = /:(\w+)/g;
            var match;
            var arr = [];
            while (match = reg.exec(path)) {
                arr.push({ replace: match[0], key: match[1] });
            }
            return arr;
        },
        dateFormat: function (fmt, date) {
            if (!date) {
                date = new Date();
            }
            else {
                date = new Date(date);
            }
            var o = {
                "M+": date.getMonth() + 1,
                "d+": date.getDate(),
                "h+": date.getHours(),
                "m+": date.getMinutes(),
                "s+": date.getSeconds(),
                "q+": Math.floor((date.getMonth() + 3) / 3),
                "S": date.getMilliseconds()
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    };
});

define('DataBase', ['Q', 'utils', 'config', 'md5', 'jquery'], function (Q, utils, config, md5) {
    return function (module) {
        var self = this;
        self.timeout = 5 * 1000;//5秒
        self.moduleName = module.id;
        self.apiPath = "";
        self.call = function (name, param) {
            return Q.promise(function (resolve, reject, notify) {
                var func = self[name];

                self.resolve = resolve;
                self.reject = reject;

                if (typeof (func) === "function") {
                    self[name](param, resolve, reject, notify);
                }
                else {
                    var err = "";
                    if (self.moduleName) {
                        err = "名为" + name + "的方法不存在";
                    }
                    else {
                        err = "名为" + self.moduleName + "." + name + "的方法不存在";
                    }
                    reject(new Error("名为" + name + "的方法不存在"));
                }
            });
        };

        self.request = function (params, op, callback, resolve, reject, notify) {
            var path = self.path;
            var options = $.extend({
                method: "GET",
                dataType: 'json'
            }, op);
            path = utils.combilePath(config.apiPath || config.api, path);
            if (options.url) {
                path = utils.combilePath(path, options.url);
            }
            $.each(utils.paramsFromRoute(path), function () {
                var value = params[this.key];
                if (value !== undefined) {
                    path = path.replace(this.replace, value);
                    delete params[this.key];
                }
                else {
                    throw new Error("未提供参数" + this.replace);
                }
            });

            function calcApiKey() {
                var now = new Date();
                var hour = now.getHours();
                var preTime = new Date().setHours(hour - 1);
                var nextTime = new Date().setHours(hour + 1);
                var fmt = "yyyy-MM-dd hh", pre = "m123456-";
                var headers = [
                    md5(pre + utils.dateFormat(fmt, preTime)),
                    md5(pre + utils.dateFormat(fmt, now)),
                    md5(pre + utils.dateFormat(fmt, nextTime))];
                return headers.join(',');
            }
            var auth = eval("(" + localStorage["auth"] + ")") || {};
            var headers = {
                app: 'm',
                'api-key': calcApiKey(),
                'access-token': auth.accessToken,
                'uid': auth.userId
            };
            var requestParams = {
                method: options.method,
                url: path,
                data: params,
                dataType: options.dataType,
                headers: headers,
                timeout: self.timeout
            };
            switch (options.method) {
                case "POST":
                    requestParams.data = JSON.stringify(requestParams.data);
                    requestParams.contentType = "application/json; charset=utf-8";
                    break;
            }
            $.ajax(requestParams)
                .done(function (res, status, ajax) {
                    if (typeof (callback) === "function") {
                        callback(res, status, ajax);
                    }
                    resolve(res, status, ajax);
                })
                .fail(function (response, status, message) {
                    if (response && response.status == 400) {
                        reject(response, status, message);
                    }
                    reject(new Error(response.responseText ||
                        status == "timeout" ? "请求超时,当前超时时间为:" + self.timeout + "毫秒"
                        : status + ":" + message));
                });
        };

        function wrap(callback) {
            return function (param, resolve, reject, notify) {
                var options = {};
                callback(options, param);
                self.request(param, options, callback, resolve, reject, notify);
            };
        };
        self.wrap = function () {
            var arr = ['call', 'request', 'wrap'];
            function fIn(k) {
                for (var i = 0; i < arr.length; i++) {
                    if (k == arr[i]) {
                        return true;
                    }
                }
                return false;
            }
            for (var key in self) {
                if (!fIn(key)) {
                    var func = self[key];
                    if (typeof (func) == "function") {
                        self[key] = wrap(func);
                    }
                }
            }

            return self;
        };

    };
});

define("db", ['require', 'Q'], function (require, Q) {

    function db(dep, param, isLoading) {
        var scb = function () { };
        if (typeof (isLoading) === "function") {
            scb = isLoading;
        }
        scb(true);
        var arr = [].concat(dep);
        var params = [].concat(param);
        var method = [];
        for (var i = 0; i < arr.length; i++) {
            var tmpArr = arr[i].split(".");
            arr[i] = "db." + tmpArr[0];
            if (tmpArr.length > 1) {
                method.push(tmpArr[1]);
            }
            else {
                method.push("");
            }
        }
        var deferred = Q.defer();

        require(arr, function () {
            var list = [];
            for (var i = 0; i < arguments.length; i++) {
                list.push(arguments[i].call(method[i], params[i]));
            }

            function onError(err) {
                deferred.reject(err);
            }
            if (list.length == 1) {
                list[0].then(deferred.resolve).fail(onError).finally(function () {
                    scb(false);
                }).done();
            }
            else {
                Q.all(list).then(deferred.resolve).fail(onError).finally(function () {
                    scb(false);
                }).done();
            }

        }, deferred.reject);
        return deferred.promise;
    };

    function enableShortCall(moduleName, func) {
        var module = db[moduleName] = {};
        var arr = [].concat(func);
        for (var i = 0; i < arr.length; i++) {
            (function () {
                var funcName = arr[i];
                module[funcName] = function (param) {
                    return db(moduleName + "." + funcName, param);
                };
            })();
        }
    }

    enableShortCall("auth", ['login']);
   
    return db;
});

define('db.auth', ['DataBase', 'module'], function (DataBase, module) {
    var ctx = new DataBase(module);
    ctx.path = "/authentication";
    ctx.login = function (option) {
        option.method = "POST";
    };
    return ctx.wrap();
});

/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());