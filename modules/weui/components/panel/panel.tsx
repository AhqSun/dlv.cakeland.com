/**
 * Created by n7best.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class Panel extends React.Component<any, any> {
    static propTypes = {
        access: React.PropTypes.bool,
    };

    static defaultProps = {
        access: false,
    };

    render() {
        const {children, className, access} = this.props;
        const cls = classNames({
            weui_panel: true,
            weui_panel_access: access,
            [className]: className
        });

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
};
