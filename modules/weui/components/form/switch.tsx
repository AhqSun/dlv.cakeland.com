/**
 * Created by BearJ on 16/2/18.
 */



import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;

export default class Switch extends React.Component<any, any>  {
    static propTypes = {
        defaultValue: PropTypes.string
    };

    static defaultProps = {
        defaultValue: ''
    };
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        const { className } = this.props;
        const cls = classNames({
            weui_switch: true,
            [className]: className
        });

        return (
            <input className={cls} type="checkbox" {...this.props}/>
        );
    }
};
