/**
 * Created by yjcxy12 on 16/1/22.
 */


import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;

export default class Input extends React.Component<any, any> {
    static propTypes = {
        defaultValue: PropTypes.string
    };

    static defaultProps = {
        defaultValue:''
    };

    render() {
        const { className } = this.props;
        const cls = classNames({
            weui_input: true,
            [className]: className
        });

        return (
            <input className={cls} {...this.props}/>
        );
    }
};
