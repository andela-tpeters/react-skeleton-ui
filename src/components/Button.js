import React, { PropTypes } from 'react';

export const Button = ({ children, className, onClick }) => (
  <div className={`btn${className ? ` ${className}` : ''}`} onClick={onClick}>
    {children}
  </div>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
