import React, { PropTypes } from 'react';

export const Card = ({ children, className }) => (
  <div className={`card${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
