import cx from 'classnames';
import React from "react";
import "./VerticalSeparator.scss";


const VerticalSeparator = () => {
    return (
        <div className={cx('container')}>
            <span className={cx('divider')}> </span>
        </div>
    );
};

export default VerticalSeparator;