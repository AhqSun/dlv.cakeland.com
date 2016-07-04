var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./weui/components/form/form", "./weui/components/form/form_cell", "./weui/components/cell/cell_header", "./weui/components/cell/cell_body", "./weui/components/label/label", "./weui/components/form/input", "./weui/components/cell/cell_footer", "./weui/components/icon/icon", "./weui/components/form/switch", "./weui/components/button/button_area", "./weui/components/button/button", 'react-router'], function (require, exports, React, form_1, form_cell_1, cell_header_1, cell_body_1, label_1, input_1, cell_footer_1, icon_1, switch_1, button_area_1, button_1, react_router_1) {
    "use strict";
    var vcodeSrc = "https://weui.io/images/vcode.jpg";
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            _super.call(this);
            this.state = {
                userName: "",
                userNameValid: false,
                password: "",
                passwordValid: false,
                showPass: false
            };
        }
        Login.prototype.handleClick = function () {
            this.props.appState.login = true;
            react_router_1.hashHistory.push({
                pathname: '/'
            });
        };
        Login.prototype.userNameChange = function (e) {
            var val = e.target.value;
            this.setState({ userName: e.target.value, userNameValid: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/.test(val) });
        };
        Login.prototype.passwordChange = function (e) {
            var val = e.target.value;
            this.setState({ password: val, passwordValid: val.length > 5 });
        };
        Login.prototype.tooglePassword = function (e) {
            this.setState({ showPass: e.target.checked });
        };
        Login.prototype.render = function () {
            return (React.createElement("div", null, React.createElement("div", {class: "hd"}, React.createElement("h1", {className: "page_title"}, "用户登录")), React.createElement(form_1.default, null, React.createElement(form_cell_1.default, {warn: this.state.userName.length > 0 && !this.state.userNameValid, success: true}, React.createElement(cell_header_1.default, null, React.createElement(label_1.default, null, "用户名")), React.createElement(cell_body_1.default, null, React.createElement(input_1.default, {type: "tel", placeholder: "请输入手机号", value: this.state.userName, onChange: this.userNameChange.bind(this)})), React.createElement(cell_footer_1.default, null, React.createElement(icon_1.default, {value: this.state.userNameValid ? "success" : "warn"}))), React.createElement(form_cell_1.default, {warn: !this.state.passwordValid && this.state.password.length > 0}, React.createElement(cell_header_1.default, null, React.createElement(label_1.default, null, "密　码")), React.createElement(cell_body_1.default, null, React.createElement(input_1.default, {type: this.state.showPass ? "tel" : "password", placeholder: "请输入密码", value: this.state.password, onChange: this.passwordChange.bind(this)})), React.createElement(cell_footer_1.default, null, React.createElement(icon_1.default, {value: this.state.passwordValid ? "success" : "warn"}))), React.createElement(form_cell_1.default, null, React.createElement(cell_body_1.default, {style: { "text-align": "right" }}, "显示密码"), React.createElement(cell_footer_1.default, null, React.createElement(switch_1.default, {onChange: this.tooglePassword.bind(this), checked: this.state.showPass})))), React.createElement(button_area_1.default, null, React.createElement(button_1.default, {onClick: this.handleClick.bind(this)}, "确定"))));
        };
        return Login;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Login;
});
//# sourceMappingURL=login.js.map