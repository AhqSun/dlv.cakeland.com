/**
 * Created by jf on 15/12/4.
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class ButtonArea extends React.Component<any,any> {
    static propTypes = {
        direction: React.PropTypes.string
    };

    static defaultProps = {
        direction: 'vertical'
    };

    render() {
        const {direction, children} = this.props;
        const className = classNames({
            weui_btn_area: true,
            weui_btn_area_inline: direction === 'horizontal'
        });

        return (
            <div className={className}>
                {children}
            </div>
        );
    }
};