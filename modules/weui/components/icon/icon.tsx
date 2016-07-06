/**
 * Created by jf on 15/11/3.
 */


import * as React from "react";
import * as classNames from 'classnames';

class Icon extends React.Component<any, any> {
    static propTypes = {
        value: React.PropTypes.string,
        size: React.PropTypes.string
    };

    static defaultProps = {
        value: 'success',
        size: 'small'
    };

    render() {
        const {value, size, className} = this.props;
        const cls = classNames({
            ['weui_icon_' + value]: true,
            weui_icon_msg: size === 'large',
            [className]: className
        });

        if (value === 'loading') {
            return (
                <div className="weui_loading">
                    {
                        [0,1,2,3,4,5,6,7,8,9,10,11].map((x, i) => {
                            return (
                                <div key={i} className={`weui_loading_leaf weui_loading_leaf_${i}`}></div>
                            );
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <i {...this.props} className={cls}/>
            );
        }
    }
}

export default Icon;