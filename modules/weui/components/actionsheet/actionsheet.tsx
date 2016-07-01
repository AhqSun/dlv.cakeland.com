/**
 * Created by jf on 15/11/26.
 */



import * as React from "react";
import * as classNames from 'classnames';
import Mask from '../mask/mask';

export default class ActionSheet extends React.Component<any, any>  {
    static propTypes = {
        menus: React.PropTypes.array,
        actions: React.PropTypes.array,
        show: React.PropTypes.bool,
        onRequestClose: React.PropTypes.func
    };

    static defaultProps = {
        menus: new Array<any>(),
        actions: new Array<any>(),
        show: false,
        onRequestClose: ()=> {

        }
    };

    render() {
        const {show, onRequestClose} = this.props;
        const className = classNames({
            weui_actionsheet: true,
            weui_actionsheet_toggle: show
        });

        return (
            <div>
                <Mask style={{display: show ? 'block' : 'none'}} onClick={onRequestClose}/>
                <div className={className}>
                    <div className="weui_actionsheet_menu">
                        {this._renderMenuItem()}
                    </div>
                    <div className="weui_actionsheet_action">
                        {this._renderActions()}
                    </div>
                </div>
            </div>
        );
    }

    _renderMenuItem() {
        return this.props.menus.map((menu:any, idx:any) => {
            const {label, className} = menu;
            const cls = classNames({
                weui_actionsheet_cell: true,
                [className]: className
            });

            return (
                <div key={idx} {...menu} className={cls}>{label}</div>
            );
        });
    }

    _renderActions() {
        return this.props.actions.map((action:any, idx:any) => {
            const {label, className} = action;
            const cls = classNames({
                weui_actionsheet_cell: true,
                [className]: className
            });

            return (
                <div key={idx} {...action} className={cls}>{label}</div>
            );
        });
    }
};
