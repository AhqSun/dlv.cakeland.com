// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";

import Button from "./weui/components/button/button";

import Tab from "./weui/components/tab/tab";

import TabBody from "./weui/components/tab/tab_body";

import TabBar from "./weui/components/tab/tabbar";

import TabBarItem from "./weui/components/tab/tabbar_item";

import TabBarIcon from "./weui/components/tab/tabbar_icon";

import TabBarLabel from "./weui/components/tab/tabbar_label";

import Article from "./weui/components/article/article";





const IconButton = '/images/icon_nav_button.png';
const IconMsg = '/images/icon_nav_msg.png';
const IconArticle = '/images/icon_nav_article.png';
const IconCell = '/images/icon_nav_cell.png';


export default class Main extends React.Component<any,any> {   
    constructor() {
        super();
        this.state = {tab:0};
    }

    render() {
        return (
            <Tab>
                <TabBody>
                    <Article>
                        {this.props.children}
                     </Article>                   
                </TabBody>
                <TabBar>
                    <TabBarItem
                        active={this.state.tab == 0}
                        onClick={(e:any) => this.setState({ tab: 0 }) }
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
                        onClick={(e: any) => this.setState({ tab: 3 }) }
                        icon={<img src={IconCell}/>}
                        label="我"
                        />
                </TabBar>
            </Tab>
        );
    }
};