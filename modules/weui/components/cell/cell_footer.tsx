/**
 * Created by jf on 15/11/12.
 */


import * as React from "react";
import * as classNames from 'classnames';

export default class CellFooter extends React.Component<any, any> {
    render() {
        const {className, children} = this.props;
        const cls = classNames({
            weui_cell_ft: true,
            [className]: className
        });

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
};