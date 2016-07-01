/**
 * Created by jf on 15/11/26.
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
define(["require", "exports", "react", 'classnames', '../mask/mask'], function (require, exports, React, classNames, mask_1) {
    "use strict";
    var ActionSheet = (function (_super) {
        __extends(ActionSheet, _super);
        function ActionSheet() {
            _super.apply(this, arguments);
        }
        ActionSheet.prototype.render = function () {
            var _a = this.props, show = _a.show, onRequestClose = _a.onRequestClose;
            var className = classNames({
                weui_actionsheet: true,
                weui_actionsheet_toggle: show
            });
            return (React.createElement("div", null, React.createElement(mask_1.default, {style: { display: show ? 'block' : 'none' }, onClick: onRequestClose}), React.createElement("div", {className: className}, React.createElement("div", {className: "weui_actionsheet_menu"}, this._renderMenuItem()), React.createElement("div", {className: "weui_actionsheet_action"}, this._renderActions()))));
        };
        ActionSheet.prototype._renderMenuItem = function () {
            return this.props.menus.map(function (menu, idx) {
                var label = menu.label, className = menu.className;
                var cls = classNames((_a = {
                        weui_actionsheet_cell: true
                    },
                    _a[className] = className,
                    _a
                ));
                return (React.createElement("div", __assign({key: idx}, menu, {className: cls}), label));
                var _a;
            });
        };
        ActionSheet.prototype._renderActions = function () {
            return this.props.actions.map(function (action, idx) {
                var label = action.label, className = action.className;
                var cls = classNames((_a = {
                        weui_actionsheet_cell: true
                    },
                    _a[className] = className,
                    _a
                ));
                return (React.createElement("div", __assign({key: idx}, action, {className: cls}), label));
                var _a;
            });
        };
        ActionSheet.propTypes = {
            menus: React.PropTypes.array,
            actions: React.PropTypes.array,
            show: React.PropTypes.bool,
            onRequestClose: React.PropTypes.func
        };
        ActionSheet.defaultProps = {
            menus: new Array(),
            actions: new Array(),
            show: false,
            onRequestClose: function () {
            }
        };
        return ActionSheet;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ActionSheet;
    ;
});
//# sourceMappingURL=actionsheet.js.map