/**
 * Created by yjcxy12 on 16/1/22.
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
    var Component = React.Component, PropTypes = React.PropTypes;
    var FormCell = (function (_super) {
        __extends(FormCell, _super);
        function FormCell() {
            _super.apply(this, arguments);
        }
        FormCell.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cell: true,
                    weui_vcode: this.props.vcode,
                    weui_cell_warn: this.props.warn,
                    weui_cell_switch: this.props.switch,
                    weui_cell_select: this.props.select,
                    weui_select_before: this.props.selectPos == 'before',
                    weui_select_after: this.props.selectPos == 'after',
                    weui_check_label: this.props.radio || this.props.checkbox
                },
                _b[className] = className,
                _b
            ));
            if (this.props.radio || this.props.checkbox) {
                return (React.createElement("label", __assign({className: cls}, this.props), children));
            }
            else {
                return (React.createElement("div", __assign({className: cls}, this.props), children));
            }
            var _b;
        };
        FormCell.propTypes = {
            vcode: PropTypes.bool,
            warn: PropTypes.bool,
            radio: PropTypes.bool,
            checkbox: PropTypes.bool,
            select: PropTypes.bool,
            selectPos: PropTypes.string,
        };
        FormCell.defaultProps = {
            vcode: false,
            warn: false,
            radio: false,
            checkbox: false,
            select: false,
            selectPos: ""
        };
        return FormCell;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = FormCell;
    ;
});
//# sourceMappingURL=form_cell.js.map