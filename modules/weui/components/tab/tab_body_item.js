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
    var TabBodyItem = (function (_super) {
        __extends(TabBodyItem, _super);
        function TabBodyItem() {
            _super.apply(this, arguments);
        }
        TabBodyItem.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, active = _a.active;
            var cls = classNames({
                weui_tab_bd_item: true
            }, className);
            return (React.createElement("div", __assign({className: cls, style: { display: active ? 'block' : 'none' }}, this.props), children));
        };
        TabBodyItem.propTypes = {
            active: React.PropTypes.bool
        };
        TabBodyItem.defaultProps = {
            active: false
        };
        return TabBodyItem;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBodyItem;
});
//# sourceMappingURL=tab_body_item.js.map