/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class NavBarItem extends React.Component<any, any> {
    static propTypes = {
      active: React.PropTypes.bool,
      label: React.PropTypes.string
    };

    static defaultProps = {
      active: false,
    };

    render() {

        const {children, className, active, label} = this.props;
        const cls = classNames({
            weui_navbar_item: true,
            weui_bar_item_on: active
        }, className);

        return (
            <div className={cls} {...this.props}>
                {label ? label : children}
            </div>
        );
    }
}