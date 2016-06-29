/**
 * Created by jf on 15/12/4.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", 'classnames'], function (require, exports, React, classNames) {
    "use strict";
    var ButtonArea = (function (_super) {
        __extends(ButtonArea, _super);
        function ButtonArea() {
            _super.apply(this, arguments);
        }
        ButtonArea.prototype.render = function () {
            var _a = this.props, direction = _a.direction, children = _a.children;
            var className = classNames({
                weui_btn_area: true,
                weui_btn_area_inline: direction === 'horizontal'
            });
            return (React.createElement("div", {className: className}, children));
        };
        ButtonArea.propTypes = {
            direction: React.PropTypes.string
        };
        ButtonArea.defaultProps = {
            direction: 'vertical'
        };
        return ButtonArea;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ButtonArea;
    ;
});
//# sourceMappingURL=button_area.js.map