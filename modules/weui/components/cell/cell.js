/**
 * Created by jf on 15/11/12.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var Cell = (function (_super) {
        __extends(Cell, _super);
        function Cell() {
            _super.apply(this, arguments);
        }
        Cell.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var Component = this.props.href ? 'a' : this.props.htmlFor ? 'label' : 'div';
            var cls = classNames((_b = {
                    weui_cell: true,
                    weui_check_label: this.props.htmlFor,
                    weui_cell_switch: this.props.switch,
                    weui_cells_radio: this.props.radio,
                    weui_cells_checkbox: this.props.checkbox
                },
                _b[className] = className,
                _b
            ));
            if (this.props.href) {
                return React.createElement("a", {className: cls}, children);
            }
            else if (this.props.htmlFor) {
                return React.createElement("label", {className: cls}, children);
            }
            else {
                return React.createElement("div", {className: cls}, children);
            }
            var _b;
        };
        return Cell;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Cell;
    ;
});
//# sourceMappingURL=cell.js.map