var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", "react", "./weui/components/tab/tab", "./weui/components/tab/tab_body", "./weui/components/tab/tabbar", "./weui/components/tab/tabbar_item", "./weui/components/tab/tabbar_icon", "./weui/components/tab/tabbar_label", "./weui/components/article/article"], function (require, exports, React, tab_1, tab_body_1, tabbar_1, tabbar_item_1, tabbar_icon_1, tabbar_label_1, article_1) {
    "use strict";
    var IconButton = '/images/icon_nav_button.png';
    var IconMsg = '/images/icon_nav_msg.png';
    var IconArticle = '/images/icon_nav_article.png';
    var IconCell = '/images/icon_nav_cell.png';
    var Main = (function (_super) {
        __extends(Main, _super);
        function Main() {
            _super.call(this);
            this.state = { tab: 0 };
        }
        Main.prototype.render = function () {
            var _this = this;
            return (React.createElement(tab_1.default, null, React.createElement(tab_body_1.default, null, React.createElement(article_1.default, null, this.props.children)), React.createElement(tabbar_1.default, null, React.createElement(tabbar_item_1.default, {active: this.state.tab == 0, onClick: function (e) { return _this.setState({ tab: 0 }); }, icon: React.createElement("img", {src: IconButton}), label: "微信"}), React.createElement(tabbar_item_1.default, {active: this.state.tab == 1, onClick: function (e) { return _this.setState({ tab: 1 }); }}, React.createElement(tabbar_icon_1.default, null, React.createElement("img", {src: IconMsg})), React.createElement(tabbar_label_1.default, null, "通讯录")), React.createElement(tabbar_item_1.default, {active: this.state.tab == 2, onClick: function (e) { return _this.setState({ tab: 2 }); }, icon: React.createElement("img", {src: IconArticle}), label: "发现"}), React.createElement(tabbar_item_1.default, {active: this.state.tab == 3, onClick: function (e) { return _this.setState({ tab: 3 }); }, icon: React.createElement("img", {src: IconCell}), label: "我"}))));
        };
        return Main;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Main;
    ;
});
//# sourceMappingURL=main.js.map