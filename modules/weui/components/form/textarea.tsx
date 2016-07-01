/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;

export default class TextArea extends React.Component<any, any> {
    static propTypes = {
        showCounter: PropTypes.bool,
        defaultValue: PropTypes.string,
    };

    static defaultProps = {
        showCounter: true,
        defaultValue: ''
    };

    state = {
        textCounter: this.props.defaultValue ? this.props.defaultValue.length : 0
    };

    handleChange(e:any){
        this.setState({textCounter: e.target.value.length});

        //forward event to props if any
        if(this.props.onChange) this.props.onChange(e);
    }

    render(){
        const { className, children, showCounter, maxlength, onChange } = this.props;
        const cls = classNames({
            weui_textarea: true,
            [className]: className
        });

        return (
            <div>
                <textarea
                className={cls}
                maxLength={maxlength}
                onChange={this.handleChange.bind(this)}
                {...this.props}>
                    {children}
                </textarea>
                {
                    showCounter ?
                    <div className="weui_textarea_counter">
                        <span>{this.state.textCounter}</span>{maxlength ? '/' + maxlength : false}
                    </div>
                    : false
                }
            </div>
        );
    }
};
