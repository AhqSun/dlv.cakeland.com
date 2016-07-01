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
    var Component = React.Component, PropTypes = React.PropTypes;
    var TextArea = (function (_super) {
        __extends(TextArea, _super);
        function TextArea() {
            _super.apply(this, arguments);
            this.state = {
                textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
            };
        }
        TextArea.prototype.handleChange = function (e) {
            this.setState({ textCounter: e.target.value.length });
            //forward event to props if any
            if (this.props.onChange)
                this.props.onChange(e);
        };
        TextArea.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children, showCounter = _a.showCounter, maxlength = _a.maxlength, onChange = _a.onChange;
            var cls = classNames((_b = {
                    weui_textarea: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", null, React.createElement("textarea", __assign({className: cls, maxLength: maxlength, onChange: this.handleChange.bind(this)}, this.props), children), showCounter ?
                React.createElement("div", {className: "weui_textarea_counter"}, React.createElement("span", null, this.state.textCounter), maxlength ? '/' + maxlength : false)
                : false));
            var _b;
        };
        TextArea.propTypes = {
            showCounter: PropTypes.bool,
            defaultValue: PropTypes.string,
        };
        TextArea.defaultProps = {
            showCounter: true,
            defaultValue: ''
        };
        return TextArea;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TextArea;
    ;
});
//# sourceMappingURL=textarea.js.map