/**
 * Created by n7best
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
    var NavBarItem = (function (_super) {
        __extends(NavBarItem, _super);
        function NavBarItem() {
            _super.apply(this, arguments);
        }
        NavBarItem.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, active = _a.active, label = _a.label;
            var cls = classNames({
                weui_navbar_item: true,
                weui_bar_item_on: active
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), label ? label : children));
        };
        NavBarItem.propTypes = {
            active: React.PropTypes.bool,
            label: React.PropTypes.string
        };
        NavBarItem.defaultProps = {
            active: false,
        };
        return NavBarItem;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = NavBarItem;
});
//# sourceMappingURL=navbar_item.js.map