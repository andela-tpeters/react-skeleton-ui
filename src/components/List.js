import React, { PropTypes } from 'react';

export const List = ({ children, className }) => (
  <div className={`list-group${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
