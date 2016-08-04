import React, { PropTypes } from 'react';

export const ListItem = ({ children, className, active }) => (
  <div className={`list-item${className ? ` ${className}` : ''}${active ? ' active' : ''}`}>
    {children}
  </div>
);

ListItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  active: PropTypes.bool
};
