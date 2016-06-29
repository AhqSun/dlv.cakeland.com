/**
 * Created by jf on 15/12/11.
 */




import * as React from "react";
import * as classNames from 'classnames';

export default class Article extends React.Component<any,any> {
    render() {
        const {className, children} = this.props;
        const cls = classNames({
            weui_article: true,
            [className]: className
        });
        return (
            <article className={cls} {...this.props}>
                {children}
            </article>
        );
    }
};