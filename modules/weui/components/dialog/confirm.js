/**
 * Created by jf on 15/10/27.
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
define(["require", "exports", "react", 'classnames', '../mask/mask'], function (require, exports, React, classNames, mask_1) {
    "use strict";
    var Confirm = (function (_super) {
        __extends(Confirm, _super);
        function Confirm() {
            _super.apply(this, arguments);
        }
        Confirm.prototype.renderButtons = function () {
            return this.props.buttons.map(function (action, idx) {
                var type = action.type, label = action.label;
                var className = classNames({
                    weui_btn_dialog: true,
                    default: type === 'default',
                    primary: type === 'primary'
                });
                return (React.createElement("a", __assign({key: idx, href: "javascript:;"}, action, {className: className}), label));
            });
        };
        Confirm.prototype.render = function () {
            var _a = this.props, title = _a.title, show = _a.show, children = _a.children;
            return (React.createElement("div", {className: "weui_dialog_confirm", style: { display: show ? 'block' : 'none' }}, React.createElement(mask_1.default, null), React.createElement("div", {className: "weui_dialog"}, React.createElement("div", {className: "weui_dialog_hd"}, React.createElement("strong", {className: "weui_dialog_title"}, title)), React.createElement("div", {className: "weui_dialog_bd"}, children), React.createElement("div", {className: "weui_dialog_ft"}, this.renderButtons()))));
        };
        Confirm.propTypes = {
            buttons: React.PropTypes.array,
            show: React.PropTypes.bool,
            title: React.PropTypes.string
        };
        Confirm.defaultProps = {
            buttons: new Array(),
            show: false,
            title: ''
        };
        return Confirm;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Confirm;
});
//# sourceMappingURL=confirm.js.map