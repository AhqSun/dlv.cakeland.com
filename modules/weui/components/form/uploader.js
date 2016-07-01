/**
 * Created by n7best
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
define(["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Uploader = (function (_super) {
        __extends(Uploader, _super);
        function Uploader() {
            _super.apply(this, arguments);
        }
        /**
         * Detecting vertical squash in loaded image.
         * Fixes a bug which squash image vertically while drawing into canvas for some images.
         * This is a bug in iOS6 devices. This function from https://github.com/stomita/ios-imagefile-megapixel
         * With react fix by n7best
         */
        Uploader.prototype.detectVerticalSquash = function (img) {
            var data;
            var ih = img.naturalHeight;
            var canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = ih;
            var ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            try {
                // Prevent cross origin error
                data = ctx.getImageData(0, 0, 1, ih).data;
            }
            catch (err) {
                // hopeless, assume the image is well and good.
                console.log('Cannot check verticalSquash: CORS?');
                return 1;
            }
            // search image edge pixel position in case it is squashed vertically.
            var sy = 0;
            var ey = ih;
            var py = ih;
            while (py > sy) {
                var alpha = data[(py - 1) * 4 + 3];
                if (alpha === 0) {
                    ey = py;
                }
                else {
                    sy = py;
                }
                py = (ey + sy) >> 1;
            }
            var ratio = (py / ih);
            return (ratio === 0) ? 1 : ratio;
        };
        Uploader.prototype.handleFile = function (file, cb) {
            var _this = this;
            var reader;
            if (typeof FileReader !== 'undefined') {
                reader = new FileReader();
            }
            else {
                if (FileReader)
                    reader = new FileReader();
            }
            reader.onload = function (e) {
                var img;
                if (typeof Image !== 'undefined') {
                    img = new Image();
                }
                else {
                    if (Image)
                        img = new Image();
                }
                img.onload = function () {
                    var w = Math.min(_this.props.maxWidth, img.width);
                    var h = img.height * (w / img.width);
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    //check canvas support, for test
                    if (ctx) {
                        //patch subsampling bug
                        //http://jsfiddle.net/gWY2a/24/
                        var drawImage = ctx.drawImage;
                        //ctx.drawImage = (img, sx, sy, sw, sh, dx, dy, dw, dh) =>
                        //{
                        //    let vertSquashRatio = 1;
                        //    // Detect if img param is indeed image
                        //    if (!!img && img.nodeName == 'IMG')
                        //    {
                        //        vertSquashRatio = this.detectVerticalSquash(img);
                        //        sw || (sw = img.naturalWidth);
                        //        sh || (sh = img.naturalHeight);
                        //    }
                        //    // Execute several cases (Firefox does not handle undefined as no param)
                        //    // by call (apply is bad performance)
                        //    if (arguments.length == 9)
                        //        drawImage.call(ctx, img, sx, sy, sw, sh, dx, dy, dw, dh / vertSquashRatio);
                        //    else if (typeof sw != 'undefined')
                        //        drawImage.call(ctx, img, sx, sy, sw, sh / vertSquashRatio);
                        //    else
                        //        drawImage.call(ctx, img, sx, sy);
                        //}.bind(this);
                        canvas.width = w;
                        canvas.height = h;
                        ctx.drawImage(img, 0, 0, w, h);
                        var base64 = canvas.toDataURL('image/png');
                        cb({
                            lastModified: file.lastModified,
                            lastModifiedDate: file.lastModifiedDate,
                            name: file.name,
                            size: file.size,
                            type: file.type,
                            data: base64
                        }, e);
                    }
                    else {
                        cb(file, e);
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        };
        Uploader.prototype.handleChange = function (e) {
            var langs = this.props.lang;
            var _files = e.target.files;
            if (_files.length === 0)
                return;
            if (this.props.files.length >= this.props.maxCount) {
                this.props.onError(langs.maxError(this.props.maxCount));
                return;
            }
            for (var key in _files) {
                if (!_files.hasOwnProperty(key))
                    continue;
                var file = _files[key];
            }
        };
        Uploader.prototype.renderFiles = function () {
            return this.props.files.map(function (file, idx) {
                var url = file.url, error = file.error, status = file.status;
                var fileStyle = {
                    backgroundImage: "url(" + url + ")"
                };
                var cls = classNames({
                    weui_uploader_file: true,
                    weui_uploader_status: error || status
                });
                return (React.createElement("li", __assign({className: cls, key: idx, style: fileStyle}, file), error || status ?
                    React.createElement("div", {className: "weui_uploader_status_content"}, error ? React.createElement("i", {className: "weui_icon_warn"}) : status)
                    : false));
            });
        };
        Uploader.prototype.render = function () {
            var _a = this.props, className = _a.className, title = _a.title, maxCount = _a.maxCount, files = _a.files, onChange = _a.onChange;
            var cls = classNames((_b = {
                    weui_uploader: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", {className: cls}, React.createElement("div", {className: "weui_uploader_hd weui_cell"}, React.createElement("div", {className: "weui_cell_bd weui_cell_primary"}, title), React.createElement("div", {className: "weui_cell_ft"}, files.length, "/", maxCount)), React.createElement("div", {className: "weui_uploader_bd"}, React.createElement("ul", {className: "weui_uploader_files"}, this.renderFiles()), React.createElement("div", {className: "weui_uploader_input_wrp"}, React.createElement("input", __assign({ref: "uploader", className: "weui_uploader_input", type: "file", accept: "image/jpg,image/jpeg,image/png,image/gif", onChange: this.handleChange.bind(this)}, this.props))))));
            var _b;
        };
        Uploader.propTypes = {
            title: PropTypes.string,
            maxCount: PropTypes.number,
            maxWidth: PropTypes.number,
            onChange: PropTypes.func,
            onError: PropTypes.func,
            files: PropTypes.array,
            lang: PropTypes.object
        };
        Uploader.defaultProps = {
            title: '图片上传',
            maxCount: 4,
            maxWidth: 500,
            files: new Array(),
            onChange: function () { },
            onError: function () { },
            lang: {
                maxError: function (maxCount) { return ("\u6700\u591A\u53EA\u80FD\u4E0A\u4F20" + maxCount + "\u5F20\u56FE\u7247"); }
            }
        };
        return Uploader;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Uploader;
    ;
});
//# sourceMappingURL=uploader.js.map