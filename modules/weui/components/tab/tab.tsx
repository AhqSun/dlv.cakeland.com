/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

import TabBody from './tab_body';
import TabBodyItem from './tab_body_item';
import NavBar from './navbar';
import NavBarItem from './navbar_item';
import TabBar from './tabbar';
import TabBarItem from './tabbar_item';
import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

export default class Tab extends React.Component<any,any> {
    static propTypes = {
      type: React.PropTypes.string,
      defaultIndex: React.PropTypes.number,
      onChange: React.PropTypes.func
    };

    static defaultProps = {
      type: 'normal',
      defaultIndex: 0
    };

    state={
        index: this.props.defaultIndex
    };

    handleHeaderClick(idx:any) {
        this.setState({index: idx});
        if(this.props.onChange) this.props.onChange(idx);
    }

    parseNavBar(children:React.ReactChildren) {
        const navHeaders:any = [];
        const navContents:any = [];

        React.Children.map(children, (child:any) => {
            const {children, type} = child.props;
            if(child.type === NavBarItem){
              navHeaders.push(child);
              if(children) navContents.push(<TabBodyItem children={children}/>);
            }else if(child.type === TabBodyItem){
              navContents.push(child);
            }
        });

        return {navHeaders, navContents};
    }

    renderNavBar(headers:any, contents:any, cls:any) {
        let _headers = headers.map((item:any, idx:any)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });

        let _contents = contents.map((item:any, idx:any)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });

        return (
            <div className={cls}>
                <NavBar>
                    {_headers}
                </NavBar>
                <TabBody>
                    {_contents}
                </TabBody>
            </div>
        );
    }

    parseTabBar(children:any) {
        const tabHeaders:any = [];
        const tabContents:any = [];

        React.Children.map(children, (child:any) => {
            const {children, type} = child.props;
            if(child.type === TabBarItem){
              tabHeaders.push(child);
              if(children) tabContents.push(<TabBodyItem children={children}/>);
            }else if(child.type === TabBodyItem){
              tabContents.push(child);
            }
        });

        return {tabHeaders, tabContents};
    }

    renderTabBar(headers: any, contents: any, cls: any) {
        let _headers = headers.map((item: any, idx: any)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                onClick: this.handleHeaderClick.bind(this, idx, item)
            });
        });

        let _contents = contents.map((item: any, idx: any)=>{
            return React.cloneElement(item, {
                key: idx,
                active: this.state.index === idx,
                tabIndex: idx
            });
        });

        return (
            <div className={cls}>
                <TabBody>
                    {_contents}
                </TabBody>
                <TabBar>
                    {_headers}
                </TabBar>
            </div>
        );
    }

    render() {
        const {children, className, type} = this.props;
        const cls = classNames({
            weui_tab: true
        }, className);

        switch(type){
            case 'tabbar':
                const {tabHeaders, tabContents} = this.parseTabBar(children);
                return this.renderTabBar(tabHeaders, tabContents, cls);              
            case 'navbar':
                const {navHeaders, navContents} = this.parseNavBar(children);
                return this.renderNavBar(navHeaders, navContents, cls);               
            default:
                return (
                    <div className={cls} {...this.props}>
                        {children}
                    </div>
                );              
        }
    }
}