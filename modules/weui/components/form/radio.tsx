/**
 * Created by n7best on 16/2/25.
 */



import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;

export default class Radio extends React.Component<any, any> {

    render() {
        const { className} = this.props;
        const cls = classNames({
            weui_check: true,
            [className]: className
        });

        return (
            <div>
                <input className={cls} type="radio" {...this.props}/>
                <span className="weui_icon_checked"></span>
            </div>
        );
    }
};
