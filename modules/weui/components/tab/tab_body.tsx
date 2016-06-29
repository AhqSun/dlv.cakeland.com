/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class TabBody extends React.Component<any,any> {

    render() {

        const {children, className} = this.props;
        const cls = classNames({
            weui_tab_bd: true
        }, className);

        return (
            <div className={cls} {...this.props}>
                {children}
            </div>
        );
    }
}