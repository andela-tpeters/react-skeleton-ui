import React, { PropTypes } from 'react';

export const Row = ({ children, className }) => (
  <div className={`row ${className ? className : ''}`}>
    {children}
  </div>
);

Row.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
