/// <reference path="../typings/tsd.d.ts" />
/// <reference path="weui/components/button/button.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import * as  ReactDOM  from "react-dom";

import Main from "./main";

import { Router, Route, Link, hashHistory } from 'react-router';
import Login from 'login'


class App extends React.Component<any , any>{
  
 
    handleEnter({location}, repalce: any) {
        console.log(location);
        var {pathname, state} = location;
        if (pathname != "/login" &&!state.login) {           
            repalce("/login");
        }
    }
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Main} onEnter={this.handleEnter}>
                 
                </Route>
                <Route path="login" component={Login}/>
            </Router>

        );
    }

}

ReactDOM.render(<App />, document.body);






