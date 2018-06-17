import React from 'react';
import PropTypes from 'prop-types';

const SVGIcon = ({ iconName }) => {
    return (
        <svg className="icon" aria-hidden="true">
            <use xlinkHref={`#${iconName}`}></use>
        </svg>
    );
};

SVGIcon.propTypes = {

};

export default SVGIcon;
