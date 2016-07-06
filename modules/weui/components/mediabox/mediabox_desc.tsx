/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class MediaBoxDescription extends React.Component<any, any> {
    render() {
        const {children, className} = this.props;
        const cls = classNames({
            weui_media_desc: true
        }, className);

        return (
            <p className={cls} {...this.props}>{children}</p>
        );
    }
};