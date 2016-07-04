/// <reference path="../typings/tsd.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import * as  ReactDOM  from "react-dom";

import Main from "./main";

import { Router, Route, Link, hashHistory } from 'react-router';
import Login from 'login'


var state = {
    login: false
};


class LoginWrapper extends React.Component<any, any>{
    render() {
        return <Login {...{appState:state}}/>;
    }
}

class MainWrapper extends React.Component<any, any>{
    render() {
        return <Main {...{ appState: state }}/>
    }

}

class App extends React.Component<any , any>{
  
 
    handleEnter({location}, repalce: any) {   
        var {pathname} = location;
        console.log(state);
        if (pathname != "/login" &&!state.login) {           
            repalce("/login");
        }
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={MainWrapper} onEnter={this.handleEnter.bind(this)}>
                 
                </Route>
                <Route path="login" component={LoginWrapper}/>
            </Router>

        );
    }

}

ReactDOM.render(<App />, document.body);






