/**
 * Created by yjcxy12 on 16/1/22.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class Label extends React.Component<any, any> {
    render() {
        const { className, children } = this.props;
        const cls = classNames({
            weui_label: true,
            [className]: className
        });

        return (
            <label className={cls} {...this.props}>{children}</label>
        );
    }
};
