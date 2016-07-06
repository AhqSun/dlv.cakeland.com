// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";

import { Button, Tab, TabBody, TabBar, TabBarItem, TabBarIcon, TabBarLabel, Article, ActionSheet } from "./weui/index";



import Logout from "./logout";

const IconButton = '/images/icon_nav_button.png';
const IconMsg = '/images/icon_nav_msg.png';
const IconArticle = '/images/icon_nav_article.png';
const IconCell = '/images/icon_nav_cell.png';




var callback = null;
var tag = null;
export default class Main extends React.Component<any, any> {
    state = {
        tab: 0
    }
    showLogoutMenu() {       
        this.setState({ tab: 3 });      
        if (callback) {         
            callback.call(tag);
        }
    }  
    render() {
        return (
            <Tab>
                <TabBody>
                    <Logout setCallback={(f, e) => { callback = f; tag = e; } } />
                    <Article>
                        {this.props.children}
                    </Article>
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={(e: any) => this.setState({ tab: 0 }) }
                        icon={<img src={IconButton}/>}
                        label="微信"
                        />
                    <TabBarItem active={this.state.tab == 1} onClick={(e: any) => this.setState({ tab: 1 }) }>
                        <TabBarIcon>
                            <img src={IconMsg}/>
                        </TabBarIcon>
                        <TabBarLabel>通讯录</TabBarLabel>
                    </TabBarItem>
                    <TabBarItem
                        active={this.state.tab == 2}
                        onClick={(e: any) => this.setState({ tab: 2 }) }
                        icon={<img src={IconArticle}/>}
                        label="发现"
                        />
                    <TabBarItem
                        active={this.state.tab == 3}
                        onClick={this.showLogoutMenu.bind(this) }
                        icon={<img src={IconCell}/>}
                        label="我"
                        />
                </TabBar>
            </Tab>    
        );
    }
};