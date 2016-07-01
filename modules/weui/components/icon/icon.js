/**
 * Created by jf on 15/11/3.
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
    var Icon = (function (_super) {
        __extends(Icon, _super);
        function Icon() {
            _super.apply(this, arguments);
        }
        Icon.prototype.render = function () {
            var _a = this.props, value = _a.value, size = _a.size, className = _a.className;
            var cls = classNames((_b = {},
                _b['weui_icon_' + value] = true,
                _b.weui_icon_msg = size === 'large',
                _b[className] = className,
                _b
            ));
            if (value === 'loading') {
                return (React.createElement("div", {className: "weui_loading"}, Array(12).slice().map(function (x, i) {
                    return (React.createElement("div", {key: i, className: "weui_loading_leaf weui_loading_leaf_" + i}));
                })));
            }
            else {
                return (React.createElement("i", __assign({}, this.props, {className: cls})));
            }
            var _b;
        };
        Icon.propTypes = {
            value: React.PropTypes.string,
            size: React.PropTypes.string
        };
        Icon.defaultProps = {
            value: 'success',
            size: 'small'
        };
        return Icon;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Icon;
});
//# sourceMappingURL=icon.js.map