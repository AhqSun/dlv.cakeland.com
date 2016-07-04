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
define(["require", "exports", "react", "react-dom", "./main", 'react-router', 'login'], function (require, exports, React, ReactDOM, main_1, react_router_1, login_1) {
    "use strict";
    var state = {
        login: false
    };
    var LoginWrapper = (function (_super) {
        __extends(LoginWrapper, _super);
        function LoginWrapper() {
            _super.apply(this, arguments);
        }
        LoginWrapper.prototype.render = function () {
            return React.createElement(login_1.default, __assign({}, { appState: state }));
        };
        return LoginWrapper;
    }(React.Component));
    var MainWrapper = (function (_super) {
        __extends(MainWrapper, _super);
        function MainWrapper() {
            _super.apply(this, arguments);
        }
        MainWrapper.prototype.render = function () {
            return React.createElement(main_1.default, __assign({}, { appState: state }));
        };
        return MainWrapper;
    }(React.Component));
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.handleEnter = function (_a, repalce) {
            var location = _a.location;
            var pathname = location.pathname;
            console.log(state);
            if (pathname != "/login" && !state.login) {
                repalce("/login");
            }
        };
        App.prototype.render = function () {
            return (React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: MainWrapper, onEnter: this.handleEnter.bind(this)}), React.createElement(react_router_1.Route, {path: "login", component: LoginWrapper})));
        };
        return App;
    }(React.Component));
    ReactDOM.render(React.createElement(App, null), document.body);
});
//# sourceMappingURL=app.js.map