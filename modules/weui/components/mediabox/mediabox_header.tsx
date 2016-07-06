/**
 * Created by n7best
 */



import * as React from "react";
import * as classNames from 'classnames';

export default class MediaBoxHeader extends React.Component<any, any>  {
    render() {
        const {children, className} = this.props;
        const clz = classNames({
            weui_media_hd: true
        }, className);

        let childrenWithProps = React.Children.map(children, (child:any) => {
            if(child.type == 'img' && !child.props.className){
              return React.cloneElement(child, { className: 'weui_media_appmsg_thumb' });
            }else{
              return child;
            }
        });

        return (
            <div className={clz} {...this.props}>{childrenWithProps}</div>
        );
    }
};