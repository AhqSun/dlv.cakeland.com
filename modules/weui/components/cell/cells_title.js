/**
 * Created by jf on 15/11/13.
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
    var CellsTitle = (function (_super) {
        __extends(CellsTitle, _super);
        function CellsTitle() {
            _super.apply(this, arguments);
        }
        CellsTitle.prototype.render = function () {
            var _a = this.props, className = _a.className, children = _a.children;
            var cls = classNames((_b = {
                    weui_cells_title: true
                },
                _b[className] = className,
                _b
            ));
            return (React.createElement("div", __assign({className: cls}, this.props), children));
            var _b;
        };
        return CellsTitle;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = CellsTitle;
    ;
});
//# sourceMappingURL=cells_title.js.map