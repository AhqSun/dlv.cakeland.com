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
    var Component = React.Component, PropTypes = React.PropTypes;
    var Select = (function (_super) {
        __extends(Select, _super);
        function Select() {
            _super.apply(this, arguments);
        }
        Select.prototype.renderData = function (data) {
            return data.map(function (item, i) {
                return React.createElement("option", __assign({key: i, value: item.value}, item), item.label);
            });
        };
        Select.prototype.render = function () {
            var _a = this.props, className = _a.className, data = _a.data, children = _a.children;
            var cls = classNames((_b = {
                    weui_select: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("select", __assign({className: cls}, this.props), data.length > 0 ? this.renderData(data) : children));
            var _b;
        };
        Select.propTypes = {
            data: React.PropTypes.array
        };
        Select.defaultProps = {
            data: new Array()
        };
        return Select;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Select;
    ;
});
//# sourceMappingURL=select.js.map