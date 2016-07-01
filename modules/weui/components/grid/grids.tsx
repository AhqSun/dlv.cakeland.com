/**
 * Created by n7best
 */




import * as React from "react";
import * as classNames from 'classnames';
import Grid from './grid';

export default class Grids extends React.Component<any, any> {
    static propTypes = {
      data: React.PropTypes.array
    };

    static defaultProps = {
      data: new Array<any>()
    };

    renderData(data:any) {
        return data.map((item:any,i:any) => {
            return <Grid
                    key={i}
                    icon={item.icon}
                    label={item.label}
                    {...item}
                    />;
        });
    }

    render() {

        const {children, data, className} = this.props;
        const cls = classNames({
            weui_grids: true
        }, className);

        return (
            <div className={cls} {...this.props}>
            {data.length > 0 ? this.renderData(data) : children}
            </div>
        );
    }
};