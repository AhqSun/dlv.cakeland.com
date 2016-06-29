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
define(["require", "exports", "react", 'classnames', './tab_body', './tab_body_item', './navbar', './navbar_item', './tabbar', './tabbar_item'], function (require, exports, React, classNames, tab_body_1, tab_body_item_1, navbar_1, navbar_item_1, tabbar_1, tabbar_item_1) {
    "use strict";
    var Tab = (function (_super) {
        __extends(Tab, _super);
        function Tab() {
            _super.apply(this, arguments);
            this.state = {
                index: this.props.defaultIndex
            };
        }
        Tab.prototype.handleHeaderClick = function (idx) {
            this.setState({ index: idx });
            if (this.props.onChange)
                this.props.onChange(idx);
        };
        Tab.prototype.parseNavBar = function (children) {
            var navHeaders = [];
            var navContents = [];
            React.Children.map(children, function (child) {
                var _a = child.props, children = _a.children, type = _a.type;
                if (child.type === navbar_item_1.default) {
                    navHeaders.push(child);
                    if (children)
                        navContents.push(React.createElement(tab_body_item_1.default, {children: children}));
                }
                else if (child.type === tab_body_item_1.default) {
                    navContents.push(child);
                }
            });
            return { navHeaders: navHeaders, navContents: navContents };
        };
        Tab.prototype.renderNavBar = function (headers, contents, cls) {
            var _this = this;
            var _headers = headers.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    onClick: _this.handleHeaderClick.bind(_this, idx, item)
                });
            });
            var _contents = contents.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    tabIndex: idx
                });
            });
            return (React.createElement("div", {className: cls}, React.createElement(navbar_1.default, null, _headers), React.createElement(tab_body_1.default, null, _contents)));
        };
        Tab.prototype.parseTabBar = function (children) {
            var tabHeaders = [];
            var tabContents = [];
            React.Children.map(children, function (child) {
                var _a = child.props, children = _a.children, type = _a.type;
                if (child.type === tabbar_item_1.default) {
                    tabHeaders.push(child);
                    if (children)
                        tabContents.push(React.createElement(tab_body_item_1.default, {children: children}));
                }
                else if (child.type === tab_body_item_1.default) {
                    tabContents.push(child);
                }
            });
            return { tabHeaders: tabHeaders, tabContents: tabContents };
        };
        Tab.prototype.renderTabBar = function (headers, contents, cls) {
            var _this = this;
            var _headers = headers.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    onClick: _this.handleHeaderClick.bind(_this, idx, item)
                });
            });
            var _contents = contents.map(function (item, idx) {
                return React.cloneElement(item, {
                    key: idx,
                    active: _this.state.index === idx,
                    tabIndex: idx
                });
            });
            return (React.createElement("div", {className: cls}, React.createElement(tab_body_1.default, null, _contents), React.createElement(tabbar_1.default, null, _headers)));
        };
        Tab.prototype.render = function () {
            var _a = this.props, children = _a.children, className = _a.className, type = _a.type;
            var cls = classNames({
                weui_tab: true
            }, className);
            switch (type) {
                case 'tabbar':
                    var _b = this.parseTabBar(children), tabHeaders = _b.tabHeaders, tabContents = _b.tabContents;
                    return this.renderTabBar(tabHeaders, tabContents, cls);
                case 'navbar':
                    var _c = this.parseNavBar(children), navHeaders = _c.navHeaders, navContents = _c.navContents;
                    return this.renderNavBar(navHeaders, navContents, cls);
                default:
                    return (React.createElement("div", __assign({className: cls}, this.props), children));
            }
        };
        Tab.propTypes = {
            type: React.PropTypes.string,
            defaultIndex: React.PropTypes.number,
            onChange: React.PropTypes.func
        };
        Tab.defaultProps = {
            type: 'normal',
            defaultIndex: 0
        };
        return Tab;
    }(React.Component));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Tab;
});
//# sourceMappingURL=tab.js.map