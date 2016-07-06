/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class MediaBoxTitle extends React.Component<any, any> {
    render() {
        const {children, className} = this.props;
        const cls = classNames({
            weui_media_title: true
        }, className);

        return (
            <h4 className={cls} {...this.props}>{children}</h4>
        );
    }
};