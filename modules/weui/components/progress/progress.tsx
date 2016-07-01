/**
 * Created by jf on 15/10/27.
 */



import * as React from "react";
import * as classNames from 'classnames';
import Icon from '../icon/icon';

class Progress extends React.Component<any, any> {
    static propTypes = {
        progress: React.PropTypes.number
    };

    static defaultProps = {
        value: 0
    };

    _renderOpr() {
        if (this.props.onClick) {
            return (
                <a href="javascript:;" className="weui_progress_opr" onClick={this.props.onClick}>
                    <Icon value="cancel"/>
                </a>
            );
        }
    }

    render() {

        let {value} = this.props;
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }

        return (
            <div className="weui_progress">
                <div className="weui_progress_bar">
                    <div className="weui_progress_inner_bar" style={{width: `${value}%`}}></div>
                </div>
                {
                    this._renderOpr()
                }
            </div>
        );
    }
}

export default Progress;