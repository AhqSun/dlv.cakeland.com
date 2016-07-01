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
define(["require", "exports", "react", 'classnames', '../mask/Mask'], function (require, exports, React, classNames, Mask_1) {
    "use strict";
    var Alert = (function (_super) {
        __extends(Alert, _super);
        function Alert() {
            _super.apply(this, arguments);
        }
        Alert.prototype._renderButtons = function () {
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
        Alert.prototype.render = function () {
            var _a = this.props, title = _a.title, show = _a.show, children = _a.children;
            return (React.createElement("div", {className: "weui_dialog_alert", style: { display: show ? 'block' : 'none' }}, React.createElement(Mask_1.default, null), React.createElement("div", {className: "weui_dialog"}, React.createElement("div", {className: "weui_dialog_hd"}, React.createElement("strong", {className: "weui_dialog_title"}, title)), React.createElement("div", {className: "weui_dialog_bd"}, children), React.createElement("div", {className: "weui_dialog_ft"}, this._renderButtons()))));
        };
        Alert.propTypes = {
            buttons: React.PropTypes.array,
            show: React.PropTypes.bool,
            title: React.PropTypes.string
        };
        Alert.defaultProps = {
            buttons: new Array(),
            show: false,
            title: ''
        };
        return Alert;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Alert;
});
//# sourceMappingURL=alert.js.map