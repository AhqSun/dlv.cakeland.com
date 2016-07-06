/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';
import MediaBoxInfoMeta from './mediabox_info_meta';

export default class MediaBoxInfo extends React.Component<any, any> {
    static propTypes = {
        data: React.PropTypes.array,
    };

    static defaultProps = {
        data: new Array<any>(),
    };

    renderData(metas:any) {
        return metas.map((meta:any,i:any) => {
            return <MediaBoxInfoMeta key={i} extra={meta.extra}>{meta.label}</MediaBoxInfoMeta>;
        });
    }

    render() {
        const {children, data, className} = this.props;
        const cls = classNames({
            weui_media_info: true
        }, className);

        return (
            <ul className={cls} {...this.props}>
                {data.length > 0 ? this.renderData(data) : children}
            </ul>
        );
    }
};