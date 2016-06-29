/**
 * Created by n7best
 */


import * as React from "react";
import * as classNames from 'classnames';

export default class TabBodyItem extends React.Component<any,any> {
    static propTypes = {
      active: React.PropTypes.bool
    };

    static defaultProps = {
      active: false
    };

    render() {

        const {children, className, active} = this.props;
        const cls = classNames({
           weui_tab_bd_item: true
        }, className);

        return (
            <div className={cls} style={{ display: active ? 'block' : 'none' }} {...this.props}>
                {children}
            </div>
        );
    }
}