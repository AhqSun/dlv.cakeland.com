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
define(["require", "exports", "react", 'classnames', './grid'], function (require, exports, React, classNames, grid_1) {
    "use strict";
    var Grids = (function (_super) {
        __extends(Grids, _super);
        function Grids() {
            _super.apply(this, arguments);
        }
        Grids.prototype.renderData = function (data) {
            return data.map(function (item, i) {
                return React.createElement(grid_1.default, __assign({key: i, icon: item.icon, label: item.label}, item));
            });
        };
        Grids.prototype.render = function () {
            var _a = this.props, children = _a.children, data = _a.data, className = _a.className;
            var cls = classNames({
                weui_grids: true
            }, className);
            return (React.createElement("div", __assign({className: cls}, this.props), data.length > 0 ? this.renderData(data) : children));
        };
        Grids.propTypes = {
            data: React.PropTypes.array
        };
        Grids.defaultProps = {
            data: new Array()
        };
        return Grids;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Grids;
    ;
});
//# sourceMappingURL=grids.js.map