/// <reference path="lib/data-base.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";

import {
    Form, FormCell, CellHeader, CellBody, CellsTitle, Label, Input, CellFooter,
    Icon, Switch, ButtonArea, Button,
    Toast, Dialog
} from "./weui/index";
const {Alert, Confirm} = Dialog;
import {hashHistory } from 'react-router';

import {auth} from "db";



export default class Login extends React.Component<any, any>{

    constructor() {
        super();
        this.state = {
            userName: "",
            userNameValid: false,
            password: "",
            passwordValid: false,
            showPass: false,
            loading: false,
            showAlert: false,
            alertMsg:'',
            alert: {
                title: '登录提示',              
                buttons: [
                    {
                        label: '确定',
                        onClick: this.hideAlert.bind(this)
                    }
                ]
            }
        };
    }
    hideAlert() {
        this.setState({ showAlert: false });
    }

    onSubmit() {     
        if (this.state.userNameValid && this.state.passwordValid) {
            this.setState({ loading: true });
            auth.login({
                user: this.state.userName, password: this.state.password
            }).then(function (data) { 
                    localStorage.setItem("auth", JSON.stringify({ userId: data.userId, accessToken: data.accessToken }));
                    hashHistory.push({ pathname: '/' });
                }).fail(function (data) {
                    var res = data.responseJSON;
                    console.log(res);
                    this.setState(
                        {
                            showAlert: true,
                            alertMsg:res.msg                          
                        }
                    );        

                }.bind(this)).done(function () {
                    this.setState({ loading: false });
                }.bind(this));
          
        }
       
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
                <Alert title={this.state.alert.title} buttons={this.state.alert.buttons} show={this.state.showAlert}>
                    {this.state.alertMsg}
                </Alert>
                <Toast show={this.state.loading}  icon="loading">
                    加载中
                </Toast>
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
                    <Button onClick={this.onSubmit.bind(this) } disabled={!(this.state.userNameValid && this.state.passwordValid)}>确定</Button>
                </ButtonArea>
            </div>
        );
    }

}
