/// <reference path="../typings/tsd.d.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import * as  ReactDOM  from "react-dom";

import {  DatePicker} from 'antd';


function onChange(value:Date, dateString:string) {
    console.log(value, dateString);
}

ReactDOM.render(<DatePicker  onChange={onChange}/>, document.getElementById("react-content"));






