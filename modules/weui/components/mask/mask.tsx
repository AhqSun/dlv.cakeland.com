/**
 * Created by jf on 15/10/27.
 */



import * as React from "react";
import * as classNames from 'classnames';

class Mask extends React.Component<any, any> {
    static propTypes = {
        transparent: React.PropTypes.bool
    };

    static defaultProps = {
        transparent: false
    };

    render() {
        const {transparent} = this.props;
        const className = classNames({
            'weui_mask': !transparent,
            'weui_mask_transparent': transparent
        });

        return (
            <div className={className} {...this.props}></div>
        );
    }
}

export default Mask;