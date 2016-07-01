/**
 * Created by jf on 15/10/27.
 */


import * as React from "react";
import * as classNames from 'classnames';
import Mask from '../mask/mask';

class Confirm extends React.Component<any, any> {
    static propTypes = {
        buttons: React.PropTypes.array,
        show: React.PropTypes.bool,
        title: React.PropTypes.string
    };

    static defaultProps = {
        buttons: new Array<any>(),
        show: false,
        title: ''
    };

    renderButtons() {
        return this.props.buttons.map((action:any, idx:any) => {
            const {type, label} = action;
            const className = classNames({
                weui_btn_dialog: true,
                default: type === 'default',
                primary: type === 'primary'
            });

            return (
                <a key={idx} href="javascript:;" {...action} className={className}>{label}</a>
            );
        });
    }

    render() {
        const {title, show, children} = this.props;

        return (
            <div className="weui_dialog_confirm" style={{display: show ? 'block' : 'none'}}>
                <Mask/>
                <div className="weui_dialog">
                    <div className="weui_dialog_hd">
                        <strong className="weui_dialog_title">{title}</strong>
                    </div>
                    <div className="weui_dialog_bd">
                        {children}
                    </div>
                    <div className="weui_dialog_ft">
                        {this.renderButtons()}
                    </div>
                </div>
            </div>
        );
    }
}

export default Confirm;