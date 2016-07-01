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
    var GridIcon = (function (_super) {
        __extends(GridIcon, _super);
        function GridIcon() {
            _super.apply(this, arguments);
        }
        GridIcon.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className;
            var cls = classNames({
                weui_grid_icon: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), children));
        };
        return GridIcon;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = GridIcon;
    ;
});
//# sourceMappingURL=grid_icon.js.map