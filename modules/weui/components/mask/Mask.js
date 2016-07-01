/**
 * Created by jf on 15/10/27.
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
    var Mask = (function (_super) {
        __extends(Mask, _super);
        function Mask() {
            _super.apply(this, arguments);
        }
        Mask.prototype.render = function () {
            var transparent = this.props.transparent;
            var className = classNames({
                'weui_mask': !transparent,
                'weui_mask_transparent': transparent
            });
            return (React.createElement("div", __assign({className: className}, this.props)));
        };
        Mask.propTypes = {
            transparent: React.PropTypes.bool
        };
        Mask.defaultProps = {
            transparent: false
        };
        return Mask;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Mask;
});
//# sourceMappingURL=mask.js.map