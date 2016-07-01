/**
 * Created by n7best on 16/2/25.
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
    var Checkbox = (function (_super) {
        __extends(Checkbox, _super);
        function Checkbox() {
            _super.apply(this, arguments);
        }
        Checkbox.prototype.render = function () {
            var className = this.props.className;
            var cls = classNames((_a = {
                    weui_check: true
                },
                _a[className] = className,
                _a
            ));
            return (React.createElement("div", null, React.createElement("input", __assign({className: cls, type: "checkbox"}, this.props)), React.createElement("i", {className: "weui_icon_checked"})));
            var _a;
        };
        return Checkbox;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Checkbox;
    ;
});
//# sourceMappingURL=checkbox.js.map