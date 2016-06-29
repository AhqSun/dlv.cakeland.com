/**
 * Created by jf on 15/10/27.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Button = (function (_super) {
        __extends(Button, _super);
        function Button() {
            _super.apply(this, arguments);
        }
        Button.prototype.render = function () {
            var _a = this.props, type = _a.type, size = _a.size, disabled = _a.disabled, plain = _a.plain, className = _a.className, children = _a.children;
            var Component = this.props.href ? 'a' : 'button';
            var cls = classNames((_b = {
                    weui_btn: true,
                    weui_btn_primary: type === 'primary' && !plain,
                    weui_btn_default: type === 'default' && !plain,
                    weui_btn_warn: type === 'warn',
                    weui_btn_plain_primary: type === 'primary' && plain,
                    weui_btn_plain_default: type === 'default' && plain,
                    weui_btn_mini: size === 'small',
                    weui_btn_disabled: disabled
                },
                _b[className] = className,
                _b
            ));
            if (this.props.href) {
                return React.createElement("a", {className: cls}, children);
            }
            else {
                return React.createElement("button", {className: cls}, children);
            }
            var _b;
        };
        Button.propTypes = {
            disabled: React.PropTypes.bool,
            type: React.PropTypes.string,
            size: React.PropTypes.string
        };
        Button.defaultProps = {
            disabled: false,
            type: 'primary',
            size: 'normal'
        };
        return Button;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Button;
    ;
});
//# sourceMappingURL=button.js.map