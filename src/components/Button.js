import React, { PropTypes } from 'react';

export const Button = ({ children, className, onClick }) => (
  <button className={`btn${className ? ` ${className}` : ''}`} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func
};
