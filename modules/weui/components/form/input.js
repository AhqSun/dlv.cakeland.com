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
    var Input = (function (_super) {
        __extends(Input, _super);
        function Input() {
            _super.apply(this, arguments);
        }
        Input.prototype.render = function () {
            var className = this.props.className;
            var cls = classNames((_a = {
                    weui_input: true
                },
                _a[className] = className,
                _a
            ));
            return (React.createElement("input", __assign({className: cls}, this.props)));
            var _a;
        };
        Input.propTypes = {
            defaultValue: PropTypes.string
        };
        Input.defaultProps = {
            defaultValue: ''
        };
        return Input;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Input;
    ;
});
//# sourceMappingURL=input.js.map