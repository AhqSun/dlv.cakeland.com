/**
 * Created by yjcxy12 on 16/1/22.
 */


import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;


export default class Form extends Component<any,any> {
    static propTypes = {
        radio: PropTypes.bool,
        checkbox: PropTypes.bool
    };

    static defaultProps = {
        radio: false,
        checkbox: false
    };

    render() {
        const { children, className, radio, checkbox } = this.props;
        const cls = classNames({
            weui_cells: true,
            weui_cells_form: !radio && !checkbox,
            weui_cells_radio: radio,
            weui_cells_checkbox: checkbox,
            [className]: className
        });

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
};
