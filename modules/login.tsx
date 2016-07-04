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

import ButtonArea from "./weui/components/button/button_area";
import Button from "./weui/components/button/button";

import {hashHistory } from 'react-router';

const vcodeSrc = "https://weui.io/images/vcode.jpg";
export default class Login extends React.Component<any, any>{
    componentDidMount() {
        console.log(this.props);
    }
    handleClick() {


        this.props.appState.login = true;

        hashHistory.push({
            pathname: '/' 
        });
    }
    render() {
        return (
            <div>
                <div class="hd">
                    <h1 className="page_title">用户登录</h1>
                </div>
                <Form>               
                    <FormCell>
                        <CellHeader>
                            <Label>用户名</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入手机号"/>
                        </CellBody>
                    </FormCell>
                    <FormCell>
                        <CellHeader>
                            <Label>密码</Label>
                        </CellHeader>
                        <CellBody>
                            <Input type="tel" placeholder="请输入密码"/>
                        </CellBody>
                    </FormCell>
                </Form>
                <ButtonArea>
                    <Button onClick={this.handleClick.bind(this)}>确定</Button>
                    <Button type="default">取消</Button>
                </ButtonArea>
            </div>
        );
    }

}
