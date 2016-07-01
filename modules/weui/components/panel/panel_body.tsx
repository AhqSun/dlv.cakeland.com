/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class PanelBody extends React.Component<any, any> {
    render() {
        const {children} = this.props;
        const className = classNames({
            weui_panel_bd: true
        });

        return (
            <div className={className} {...this.props}>{children}</div>
        );
    }
};