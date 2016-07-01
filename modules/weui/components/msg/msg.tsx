/**
 * Created by jf on 15/11/4.
 */



import * as React from "react";
import * as classNames from 'classnames';

import Button from '../button/button';
import Icon from '../icon/icon';

class Msg extends React.Component<any,any> {
    static propTypes = {
        type: React.PropTypes.string,
        buttons: React.PropTypes.array
    };

    static defaultProps = {
        type: 'success',
        buttons:new Array<any>()
    };

    _renderButtons() {

        return this.props.buttons.map((button:any, idx:any) => {
            const {type, label} = button;
            return (
                <Button key={idx} {...button} type={type}>{label}</Button>
            );
        });
    }

    render() {
        return (
            <div className="weui_msg">
                <div className="weui_icon_area">
                    <Icon value={this.props.type} className="weui_icon_msg"/>
                </div>
                <div className="weui_text_area">
                    <h2 className="weui_msg_title">{this.props.title}</h2>
                    <p className="weui_msg_desc">{this.props.description}</p>
                </div>
                <div className="weui_opr_area">
                    <p className="weui_btn_area">
                        {this._renderButtons()}
                    </p>
                </div>
                <div className="weui_extra_area">
                    {
                        this.props.extraHref ?
                            <a href={this.props.extraHref} className="weui_extra_link">{this.props.extraText}</a> :
                            <p className="weui_extra_text">{this.props.extraText}</p>
                    }
                </div>
            </div>
        );
    }
}

export default Msg;
