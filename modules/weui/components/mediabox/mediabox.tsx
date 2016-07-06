/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class MediaBox extends React.Component<any, any> {
    static propTypes = {
        type: React.PropTypes.string
    };

    static defaultProps = {
        type: 'text'
    };

    render() {
        const {children, type, className} = this.props;
        const Component = this.props.href ? 'a' : 'div';
        const cls = classNames({
            weui_media_box: true,
            weui_media_appmsg: type === 'appmsg',
            weui_media_text: type === 'text',
            weui_media_small_appmsg: type === 'small_appmsg',
        }, className);
        if (this.props.href) {
            return <a className={cls} {...this.props}>{children}</a>;
        }
        else {
            return <div className={cls} {...this.props}>{children}</div>;
        }
    }
};