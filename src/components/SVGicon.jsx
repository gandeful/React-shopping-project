import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ iconName, color, size }) => {
    return (
        <svg className="icon" aria-hidden="true" style={{color,fontSize:size}}>
            <use xlinkHref={`#${iconName}`}></use>
        </svg>
    );
};

SVGIcon.propTypes = {
    iconName:PropTypes.string,
    color:PropTypes.string,
    size:PropTypes.number
};

SVGIcon.defaultProps={
    size:16
}
export default SVGIcon;
