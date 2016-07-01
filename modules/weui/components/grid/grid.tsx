/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

const { Component, PropTypes } = React;

import GridIcon from './grid_icon';
import GridLabel from './grid_label';

export default class Grid extends React.Component<any, any> {
    static propTypes = {
      label: React.PropTypes.string,
      icon: React.PropTypes.any
    };

    static defaultProps = {
      label: '',
      icon: false
    };

    render() {
        const {children, icon, label, className} = this.props;
        const cls = classNames({
            weui_grid: true
        }, className);

        return (
            <a className={cls} {...this.props}>
              {icon ? <GridIcon>{icon}</GridIcon> : false}
              {children}
              {label ? <GridLabel>{label}</GridLabel> : false}
            </a>
        );
    }
};