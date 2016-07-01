/**
 * Created by n7best
 */




import * as React from "react";
import * as classNames from 'classnames';

export default class PanelHeader extends React.Component<any, any> {
    render() {
        const {children} = this.props;
        const className = classNames({
            weui_panel_hd: true
        });

        return (
            <div className={className} {...this.props}>{children}</div>
        );
    }
};