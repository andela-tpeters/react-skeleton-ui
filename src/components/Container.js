import React, { PropTypes } from 'react';

export const Container = ({ children, className, fluid }) => (
  <div className={`${fluid ? 'container-fluid' : 'container'}${className ? className : ''}`}>
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};
