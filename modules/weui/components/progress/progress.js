/**
 * Created by jf on 15/10/27.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", '../icon/icon'], function (require, exports, React, icon_1) {
    "use strict";
    var Progress = (function (_super) {
        __extends(Progress, _super);
        function Progress() {
            _super.apply(this, arguments);
        }
        Progress.prototype._renderOpr = function () {
            if (this.props.onClick) {
                return (React.createElement("a", {href: "javascript:;", className: "weui_progress_opr", onClick: this.props.onClick}, React.createElement(icon_1.default, {value: "cancel"})));
            }
        };
        Progress.prototype.render = function () {
            var value = this.props.value;
            if (value < 0) {
                value = 0;
            }
            if (value > 100) {
                value = 100;
            }
            return (React.createElement("div", {className: "weui_progress"}, React.createElement("div", {className: "weui_progress_bar"}, React.createElement("div", {className: "weui_progress_inner_bar", style: { width: value + "%" }})), this._renderOpr()));
        };
        Progress.propTypes = {
            progress: React.PropTypes.number
        };
        Progress.defaultProps = {
            value: 0
        };
        return Progress;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Progress;
});
//# sourceMappingURL=progress.js.map