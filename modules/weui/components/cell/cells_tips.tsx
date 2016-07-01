/**
 * Created by jf on 15/12/3.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class CellsTips extends React.Component<any, any> {
    render() {
        const {className, children} = this.props;
        const cls = classNames({
            weui_cells_tips: true,
            [className]: className
        });

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
};