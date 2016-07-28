import React, { PropTypes } from 'react';

export const Col = ({ children, className, xs, sm, md, lg }) => (
  <div className={`column${className ? ` ${className}` : ''}${xs ? ` col-xs-${xs}` : ' col-xs'}${sm ? ` col-sm-${sm}` : ''}${md ? ` col-md-${md}` : ''}${lg ? ` col-lg-${lg}` : ''}`}>
    {children}
  </div>
);

Col.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number
};
