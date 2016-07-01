/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class GridLabel extends React.Component<any, any> {
    render() {
        const {children, className} = this.props;
        const cls = classNames({
            weui_grid_label: true
        }, className);

        return (
            <p className={cls} {... this.props}>{children}</p>
        );
    }
};