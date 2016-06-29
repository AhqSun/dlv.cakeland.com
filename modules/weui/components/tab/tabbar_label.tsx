/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class TabBarLabel extends React.Component<any,any> {

    render() {

        const {children, className} = this.props;
        const cls = classNames({
            weui_tabbar_label: true,
        }, className);

        return (
            <p className={cls} {...this.props}>
                {children}
            </p>
        );
    }
}