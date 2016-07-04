/// <reference path="lib/data-base.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import Form from "./weui/components/form/form";
import FormCell from "./weui/components/form/form_cell";
import CellHeader from "./weui/components/cell/cell_header";
import CellBody from "./weui/components/cell/cell_body";
import CellsTitle from "./weui/components/cell/cells_title";
import Label from "./weui/components/label/label";
import Input from "./weui/components/form/input";
import Panel from "./weui/components/panel/panel";
import CellFooter from "./weui/components/cell/cell_footer";
import Icon from "./weui/components/icon/icon";

import Switch from "./weui/components/form/switch";

import ButtonArea from "./weui/components/button/button_area";
import Button from "./weui/components/button/button";

import {hashHistory } from 'react-router';

import {auth} from "db";

const vcodeSrc = "https://weui.io/images/vcode.jpg";


export default class Login extends React.Component<any, any>{

    constructor() {
        super();
        this.state = {
            userName: "",
            userNameValid: false,
            password: "",
            passwordValid: false,
            showPass: false
        };
    }
    handleClick() {
        this.props.appState.login = true;
        hashHistory.push({
            pathname: '/'
        });
    }
    userNameChange(e: any) {
        var val = e.target.value;
        this.setState({ userName: e.target.value, userNameValid: /^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$/.test(val) });
    }
    passwordChange(e: any) {
        var val = e.target.value;
        this.setState({ password: val, passwordValid: val.length>5 });
    }
    tooglePassword(e: any) {
        this.setState({ showPass: e.target.checked });
    }
    render() {
        return (
            <div>
                <div class="hd">
                    <h1 className="page_title">用户登录</h1>
                </div>
                <Form>
                    <FormCell warn={this.state.userName.length > 0 && !this.state.userNameValid} success={true}>
                        <CellHeader>
                            <Label>用户名</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入手机号" value={this.state.userName}   onChange={this.userNameChange.bind(this) }/>
                        </CellBody>
                        <CellFooter>
                            <Icon value={this.state.userNameValid ? "success" : "warn"}/>
                        </CellFooter>
                    </FormCell>
                    <FormCell warn={!this.state.passwordValid&&this.state.password.length>0}>
                        <CellHeader>
                            <Label>密　码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type={this.state.showPass ? "tel" : "password"} placeholder="请输入密码" value={this.state.password} onChange={this.passwordChange.bind(this) }/>
                        </CellBody>
                        <CellFooter>
                            <Icon value={this.state.passwordValid ? "success" : "warn"}/>
                        </CellFooter>
                    </FormCell>
                    <FormCell>
                        <CellBody style={{ "text-align": "right" }}>
                            显示密码
                        </CellBody>
                        <CellFooter>
                            <Switch onChange={this.tooglePassword.bind(this) } checked={this.state.showPass}/>
                        </CellFooter>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.handleClick.bind(this) }>确定</Button>
                </ButtonArea>
            </div>
        );
    }

}
