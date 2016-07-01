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
    var PanelFooter = (function (_super) {
        __extends(PanelFooter, _super);
        function PanelFooter() {
            _super.apply(this, arguments);
        }
        PanelFooter.prototype.render = function () {
            var children = this.props.children;
            var className = classNames({
                weui_panel_ft: true
            });
            if (this.props.href) {
                return React.createElement("a", __assign({className: className}, this.props), children);
            }
            else {
                React.createElement("div", __assign({className: className}, this.props), children);
            }
        };
        return PanelFooter;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = PanelFooter;
    ;
});
//# sourceMappingURL=panel_footer.js.map