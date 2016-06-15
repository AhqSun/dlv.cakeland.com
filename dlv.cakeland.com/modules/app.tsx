// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from "react";
import * as  ReactDOM  from "react-dom";
import { Button, Alert, Modal, OverlayTrigger, Popover, Tooltip } from 'react-bootstrap';

import { DatePicker } from 'antd';
ReactDOM.render(<DatePicker />, document.body);



