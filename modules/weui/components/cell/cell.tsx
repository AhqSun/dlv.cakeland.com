/**
 * Created by jf on 15/11/12.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class Cell extends React.Component<any, any> {
    render() {
        const {className, children} = this.props;
        const Component = this.props.href ? 'a' : this.props.htmlFor ? 'label' : 'div';
        const cls = classNames({
            weui_cell: true,
            weui_check_label: this.props.htmlFor,
            weui_cell_switch: this.props.switch,
            weui_cells_radio: this.props.radio,
            weui_cells_checkbox: this.props.checkbox,
            [className]: className
        });

        if (this.props.href) {
            return <a  className={cls}>{children}</a>
        }
        else if (this.props.htmlFor) {
            return <label  className={cls}>{children}</label>
        }
        else {
            return <div  className={cls}>{children}</div>
        }

    }
};