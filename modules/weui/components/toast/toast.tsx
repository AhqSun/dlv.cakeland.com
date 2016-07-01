/**
 * Created by jf on 15/10/27.
 */



import * as React from "react";
import * as classNames from 'classnames';
import Mask from '../mask/mask';
import Icon from '../icon/icon';


class Toast extends React.Component<any, any> {
    static propTypes = {
        icon: React.PropTypes.string,
        iconSize: React.PropTypes.string,
        show: React.PropTypes.bool
    };

    static defaultProps = {
        icon: 'toast',
        show: false,
    };

    render() {
        const {icon, show, children, iconSize} = this.props;

        return (
            <div className={icon === 'loading' ? 'weui_loading_toast' : ''} style={{display: show ? 'block' : 'none'}}>
                <Mask transparent={true}/>
                <div className="weui_toast">
                    <Icon value={icon} size={iconSize}/>
                    <p className="weui_toast_content">{children}</p>
                </div>
            </div>
        );
    }
}

export default Toast;