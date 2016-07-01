/**
 * Created by jf on 15/11/12.
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
    var Cells = (function (_super) {
        __extends(Cells, _super);
        function Cells() {
            _super.apply(this, arguments);
        }
        Cells.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, access = _a.access, radio = _a.radio, checkbox = _a.checkbox;
            var cls = classNames((_b = {
                    weui_cells: true,
                    weui_cells_access: access
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        Cells.propTypes = {
            access: React.PropTypes.bool,
            radio: React.PropTypes.bool,
            checkbox: React.PropTypes.bool
        };
        Cells.defaultProps = {
            access: false,
            radio: false,
            checkbox: false
        };
        return Cells;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Cells;
    ;
});
//# sourceMappingURL=cells.js.map