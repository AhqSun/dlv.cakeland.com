/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class PanelFooter extends React.Component<any, any> {
    render() {
        const {children} = this.props;     
        const className = classNames({
            weui_panel_ft: true
        });

        if (this.props.href) {
            return <a className={className} {...this.props}>{children}</a>;
        }
        else {
            <div className={className} {...this.props}>{children}</div>
        }

    }
};