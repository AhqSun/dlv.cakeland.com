/**
 * Created by jf on 15/11/13.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class CellsTitle extends React.Component<any, any>  {
    render() {
        const {className, children} = this.props;
        const cls = classNames({
            weui_cells_title: true,
            [className]: className
        });

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
};