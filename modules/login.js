var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./weui/components/form/form", "./weui/components/form/form_cell", "./weui/components/cell/cell_header", "./weui/components/cell/cell_body", "./weui/components/label/label", "./weui/components/form/input", "./weui/components/button/button_area", "./weui/components/button/button", 'react-router'], function (require, exports, React, form_1, form_cell_1, cell_header_1, cell_body_1, label_1, input_1, button_area_1, button_1, react_router_1) {
    "use strict";
    var vcodeSrc = "https://weui.io/images/vcode.jpg";
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            _super.apply(this, arguments);
        }
        Login.prototype.componentDidMount = function () {
            console.log(this.state);
        };
        Login.prototype.handleClick = function () {
            react_router_1.hashHistory.push({
                pathname: '/',
                state: { login: true }
            });
        };
        Login.prototype.render = function () {
            return (React.createElement("div", null, React.createElement("div", {class: "hd"}, React.createElement("h1", {className: "page_title"}, "用户登录")), React.createElement(form_1.default, null, React.createElement(form_cell_1.default, null, React.createElement(cell_header_1.default, null, React.createElement(label_1.default, null, "用户名")), React.createElement(cell_body_1.default, null, React.createElement(input_1.default, {type: "tel", placeholder: "请输入手机号"}))), React.createElement(form_cell_1.default, null, React.createElement(cell_header_1.default, null, React.createElement(label_1.default, null, "密码")), React.createElement(cell_body_1.default, null, React.createElement(input_1.default, {type: "tel", placeholder: "请输入密码"})))), React.createElement(button_area_1.default, null, React.createElement(button_1.default, {onClick: this.handleClick}, "确定"), React.createElement(button_1.default, {type: "default"}, "取消"))));
        };
        return Login;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Login;
});
//# sourceMappingURL=login.js.map