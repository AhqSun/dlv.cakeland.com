// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from "react";
import { Button, ActionSheet } from "./weui/index";
import { hashHistory } from 'react-router';
export default class Logout extends React.Component<any, any> {
    state = {
        show: false,
        menus: [{
            label: '退出登录',
            onClick: () => {
                localStorage.removeItem("auth");
                this.setState({ show: false });  
                hashHistory.push("/login");            
            }
        }],
        actions: [
            {
                label: '取消',
                onClick: this.hide.bind(this)
            }
        ]
    }
    componentWillMount() {
        this.props.setCallback(this.show, this);
    }
    hide() {
        this.setState({ show: false });
    }
    show() {
        console.log("show");
        this.setState({ show: true });
    }
    render() {
        return <ActionSheet menus={this.state.menus} actions={this.state.actions}  onRequestClose={this.hide.bind(this) } show={this.state.show}  />
    }
}