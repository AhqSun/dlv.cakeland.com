/**
 * Created by jf on 15/11/12.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class Cells extends React.Component<any, any> {
    static propTypes = {
        access: React.PropTypes.bool,
        radio: React.PropTypes.bool,
        checkbox: React.PropTypes.bool
    };

    static defaultProps = {
        access: false,
        radio: false,
        checkbox: false
    };

    render() {
        const {children, className, access, radio, checkbox} = this.props;
        const cls = classNames({
            weui_cells: true,
            weui_cells_access: access,
            [className]: className
        });

        return (
            <div className={cls} {...this.props}>{children}</div>
        );
    }
};
