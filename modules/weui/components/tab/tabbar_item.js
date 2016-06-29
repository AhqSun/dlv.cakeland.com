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
define(["require", "exports", "react", 'classnames', './tabbar_icon', './tabbar_label'], function (require, exports, React, classNames, tabbar_icon_1, tabbar_label_1) {
    "use strict";
    var TabBarItem = (function (_super) {
        __extends(TabBarItem, _super);
        function TabBarItem() {
            _super.apply(this, arguments);
        }
        TabBarItem.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, active = _a.active, icon = _a.icon, label = _a.label;
            var cls = classNames({
                weui_tabbar_item: true,
                weui_bar_item_on: active
            }, className);
            if (icon || label) {
                return (React.createElement("div", __assign({className: cls}, this.props), icon ? React.createElement(tabbar_icon_1.default, null, icon) : false, label ? React.createElement(tabbar_label_1.default, null, label) : false));
            }
            else {
                return (React.createElement("div", __assign({className: cls}, this.props), children));
            }
        };
        TabBarItem.propTypes = {
            active: React.PropTypes.bool,
            icon: React.PropTypes.any,
            label: React.PropTypes.string
        };
        TabBarItem.defaultProps = {
            active: false,
            icon: false,
            label: ''
        };
        return TabBarItem;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBarItem;
});
//# sourceMappingURL=tabbar_item.js.map