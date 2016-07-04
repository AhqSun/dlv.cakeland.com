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
    var Form = (function (_super) {
        __extends(Form, _super);
        function Form() {
            _super.apply(this, arguments);
        }
        Form.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, radio = _a.radio, checkbox = _a.checkbox;
            var cls = classNames((_b = {
                    weui_cells: true,
                    weui_cells_form: !radio && !checkbox,
                    weui_cells_radio: radio,
                    weui_cells_checkbox: checkbox
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        Form.propTypes = {
            radio: PropTypes.bool,
            checkbox: PropTypes.bool
        };
        Form.defaultProps = {
            radio: false,
            checkbox: false
        };
        return Form;
    }(Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Form;
    ;
});
//# sourceMappingURL=form.js.map