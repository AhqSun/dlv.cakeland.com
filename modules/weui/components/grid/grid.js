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
define(["require", "exports", "react", 'classnames', './grid_icon', './grid_label'], function (require, exports, React, classNames, grid_icon_1, grid_label_1) {
    "use strict";
    var Component = React.Component, PropTypes = React.PropTypes;
    var Grid = (function (_super) {
        __extends(Grid, _super);
        function Grid() {
            _super.apply(this, arguments);
        }
        Grid.prototype.render = function () {
            var _a = this.props, children = _a.children, icon = _a.icon, label = _a.label, className = _a.className;
            var cls = classNames({
                weui_grid: true
            }, className);
            return (React.createElement("a", __assign({className: cls}, this.props), icon ? React.createElement(grid_icon_1.default, null, icon) : false, children, label ? React.createElement(grid_label_1.default, null, label) : false));
        };
        Grid.propTypes = {
            label: React.PropTypes.string,
            icon: React.PropTypes.any
        };
        Grid.defaultProps = {
            label: '',
            icon: false
        };
        return Grid;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Grid;
    ;
});
//# sourceMappingURL=grid.js.map