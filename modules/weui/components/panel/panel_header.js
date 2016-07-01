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
    var PanelHeader = (function (_super) {
        __extends(PanelHeader, _super);
        function PanelHeader() {
            _super.apply(this, arguments);
        }
        PanelHeader.prototype.render = function () {
            var children = this.props.children;
            var className = classNames({
                weui_panel_hd: true
            });
            return (React.createElement("div", __assign({className: className}, this.props), children));
        };
        return PanelHeader;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PanelHeader;
    ;
});
//# sourceMappingURL=panel_header.js.map