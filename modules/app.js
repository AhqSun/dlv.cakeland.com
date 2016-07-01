var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "react-dom", "./main", 'react-router', 'login'], function (require, exports, React, ReactDOM, main_1, react_router_1, login_1) {
    "use strict";
    var App = (function (_super) {
        __extends(App, _super);
        function App() {
            _super.apply(this, arguments);
        }
        App.prototype.handleEnter = function (_a, repalce) {
            var location = _a.location;
            console.log(location);
            var pathname = location.pathname, state = location.state;
            if (pathname != "/login" && !state.login) {
                repalce("/login");
            }
        };
        App.prototype.render = function () {
            return (React.createElement(react_router_1.Router, {history: react_router_1.hashHistory}, React.createElement(react_router_1.Route, {path: "/", component: main_1.default, onEnter: this.handleEnter}), React.createElement(react_router_1.Route, {path: "login", component: login_1.default})));
        };
        return App;
    }(React.Component));
    ReactDOM.render(React.createElement(App, null), document.body);
});
//# sourceMappingURL=app.js.map