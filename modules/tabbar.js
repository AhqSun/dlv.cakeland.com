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
    var TabBarDemo = (function (_super) {
        __extends(TabBarDemo, _super);
        function TabBarDemo() {
            _super.apply(this, arguments);
            this.state = {
                tab: 0
            };
        }
        TabBarDemo.prototype.render = function () {
            var _this = this;
            return (React.createElement(tab_1.default, null, React.createElement(tab_body_1.default, null, React.createElement(article_1.default, {style: { display: this.state.tab == 0 ? null : 'none' }}, React.createElement("h1", null, "选项页1"), React.createElement("section", null, React.createElement("h2", {className: "title"}, "章标题"), React.createElement("section", null, React.createElement("h3", null, "1.1 节标题"), React.createElement("p", null, "由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。")))), React.createElement(article_1.default, {style: { display: this.state.tab == 1 ? null : 'none' }}, React.createElement("h1", null, "通讯录"), React.createElement("section", null, React.createElement("h2", {className: "title"}, "章标题"), React.createElement("section", null, React.createElement("h3", null, "2.1 节标题"), React.createElement("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod" + ' ' + "tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam," + ' ' + "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" + ' ' + "consequat.Duis aute")))), React.createElement(article_1.default, {style: { display: this.state.tab == 2 ? null : 'none' }}, React.createElement("h1", null, "发现"), React.createElement("section", null, React.createElement("h2", {className: "title"}, "章标题"))), React.createElement(article_1.default, {style: { display: this.state.tab == 3 ? null : 'none' }}, React.createElement("h1", null, "我"), React.createElement("section", null, React.createElement("h2", {className: "title"}, "章标题")))), React.createElement(tabbar_1.default, null, React.createElement(tabbar_item_1.default, {active: this.state.tab == 0, onClick: function (e) { return _this.setState({ tab: 0 }); }, icon: React.createElement("img", {src: IconButton}), label: "微信"}), React.createElement(tabbar_item_1.default, {active: this.state.tab == 1, onClick: function (e) { return _this.setState({ tab: 1 }); }}, React.createElement(tabbar_icon_1.default, null, React.createElement("img", {src: IconMsg})), React.createElement(tabbar_label_1.default, null, "通讯录")), React.createElement(tabbar_item_1.default, {active: this.state.tab == 2, onClick: function (e) { return _this.setState({ tab: 2 }); }, icon: React.createElement("img", {src: IconArticle}), label: "发现"}), React.createElement(tabbar_item_1.default, {active: this.state.tab == 3, onClick: function (e) { return _this.setState({ tab: 3 }); }, icon: React.createElement("img", {src: IconCell}), label: "我"}))));
        };
        return TabBarDemo;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = TabBarDemo;
    ;
});
//# sourceMappingURL=tabbar.js.map