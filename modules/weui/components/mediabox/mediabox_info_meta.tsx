/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class MediaBoxInfoMeta extends React.Component<any, any> {
    static propTypes = {
        extra: React.PropTypes.bool,
    };

    static defaultProps = {
        extra: false,
    };

    render() {
        const {children, extra, className} = this.props;
        const cls = classNames({
            weui_media_info_meta: true,
            weui_media_info_meta_extra: extra
        }, className);

        return (
            <li className={cls} {...this.props}>{children}</li>
        );
    }
};