/**
 * Created by n7best on 16/2/25.
 */


import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;

export default class Select extends React.Component<any, any> {
    static propTypes = {
      data: React.PropTypes.array
    };

    static defaultProps = {
      data: new Array<any>()
    };

    renderData(data:any) {
        return data.map((item:any,i:any) => {
            return <option
                    key={i}
                    value={item.value}
                    {...item}
                    >
                        {item.label}
                   </option>;
        });
    }

    render() {
        const { className, data, children } = this.props;
        const cls = classNames({
            weui_select: true,
            [className]: className
        });

        return (
            <select className={cls} {...this.props}>
                {data.length > 0 ? this.renderData(data) : children}
            </select>
        );
    }
};
