/**
 * Created by jf on 15/10/27.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", '../mask/mask', '../icon/icon'], function (require, exports, React, mask_1, icon_1) {
    "use strict";
    var Toast = (function (_super) {
        __extends(Toast, _super);
        function Toast() {
            _super.apply(this, arguments);
        }
        Toast.prototype.render = function () {
            var _a = this.props, icon = _a.icon, show = _a.show, children = _a.children, iconSize = _a.iconSize;
            return (React.createElement("div", {className: icon === 'loading' ? 'weui_loading_toast' : '', style: { display: show ? 'block' : 'none' }}, React.createElement(mask_1.default, {transparent: true}), React.createElement("div", {className: "weui_toast"}, React.createElement(icon_1.default, {value: icon, size: iconSize}), React.createElement("p", {className: "weui_toast_content"}, children))));
        };
        Toast.propTypes = {
            icon: React.PropTypes.string,
            iconSize: React.PropTypes.string,
            show: React.PropTypes.bool
        };
        Toast.defaultProps = {
            icon: 'toast',
            show: false,
        };
        return Toast;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Toast;
});
//# sourceMappingURL=toast.js.map