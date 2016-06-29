/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

import TabBarIcon from './tabbar_icon';
import TabBarLabel from './tabbar_label';

export default class TabBarItem extends React.Component<any,any> {
    static propTypes = {
      active: React.PropTypes.bool,
      icon: React.PropTypes.any,
      label: React.PropTypes.string
    };

    static defaultProps = {
      active: false,
      icon: false,
      label: ''
    };

    render() {

        const {children, className, active, icon, label} = this.props;
        const cls = classNames({
            weui_tabbar_item: true,
            weui_bar_item_on: active
        }, className);

        if(icon || label){
            return (
                <div className={cls} {...this.props}>
                    {icon ? <TabBarIcon>{icon}</TabBarIcon> : false}
                    {label ? <TabBarLabel>{label}</TabBarLabel> : false}
                </div>
            )
        }else{
            return (
                <div className={cls} {...this.props}>
                    {children}
                </div>
            );
        }
    }
}