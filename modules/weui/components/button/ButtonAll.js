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
                return React.createElement("a", __assign({className: cls}, this.props), children);
            }
            else {
                return React.createElement("button", __assign({className: cls}, this.props), children);
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
/**
 * Created by jf on 15/12/4.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var ButtonArea = (function (_super) {
        __extends(ButtonArea, _super);
        function ButtonArea() {
            _super.apply(this, arguments);
        }
        ButtonArea.prototype.render = function () {
            var _a = this.props, direction = _a.direction, children = _a.children;
            var className = classNames({
                weui_btn_area: true,
                weui_btn_area_inline: direction === 'horizontal'
            });
            return (React.createElement("div", {className: className}, children));
        };
        ButtonArea.propTypes = {
            direction: React.PropTypes.string
        };
        ButtonArea.defaultProps = {
            direction: 'vertical'
        };
        return ButtonArea;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ButtonArea;
    ;
});
//# sourceMappingURL=button_area.js.map
/**
 * Created by jf on 15/10/27.
 */
define(["require", "exports", './button', './button_area'], function (require, exports, button_1, button_area_1) {
    "use strict";
    exports.Button = button_1.default;
    exports.ButtonArea = button_area_1.default;
});
//# sourceMappingURL=index.js.map