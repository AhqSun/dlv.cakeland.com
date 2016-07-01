/**
 * Created by jf on 15/11/4.
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
define(["require", "exports", "react", '../button/button', '../icon/icon'], function (require, exports, React, button_1, icon_1) {
    "use strict";
    var Msg = (function (_super) {
        __extends(Msg, _super);
        function Msg() {
            _super.apply(this, arguments);
        }
        Msg.prototype._renderButtons = function () {
            return this.props.buttons.map(function (button, idx) {
                var type = button.type, label = button.label;
                return (React.createElement(button_1.default, __assign({key: idx}, button, {type: type}), label));
            });
        };
        Msg.prototype.render = function () {
            return (React.createElement("div", {className: "weui_msg"}, React.createElement("div", {className: "weui_icon_area"}, React.createElement(icon_1.default, {value: this.props.type, className: "weui_icon_msg"})), React.createElement("div", {className: "weui_text_area"}, React.createElement("h2", {className: "weui_msg_title"}, this.props.title), React.createElement("p", {className: "weui_msg_desc"}, this.props.description)), React.createElement("div", {className: "weui_opr_area"}, React.createElement("p", {className: "weui_btn_area"}, this._renderButtons())), React.createElement("div", {className: "weui_extra_area"}, this.props.extraHref ?
                React.createElement("a", {href: this.props.extraHref, className: "weui_extra_link"}, this.props.extraText) :
                React.createElement("p", {className: "weui_extra_text"}, this.props.extraText))));
        };
        Msg.propTypes = {
            type: React.PropTypes.string,
            buttons: React.PropTypes.array
        };
        Msg.defaultProps = {
            type: 'success',
            buttons: new Array()
        };
        return Msg;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Msg;
});
//# sourceMappingURL=msg.js.map