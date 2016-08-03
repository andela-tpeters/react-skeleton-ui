import React, { PropTypes, Component } from 'react';

export class Modal extends Component {
  render() {
    const { children, close, size, show, hideX } = this.props;

    return (
      <div>
        {/* TODO: Add in araia-labelledby by for usability */}
        <div className={`modal-bg${show ? ' active' : ''}`} onClick={close}></div>
        <div className={`modal-wrapper${size ? ` ${size}` : ''}${show ? ' active' : ''}`} role="dialog" tabIndex="-1" aria-hidden={show ? 'false' : 'true'}>
          {/* Unless hideX is passed, show a close X */}
          {hideX ? null : <span className='close-x' onClick={close}>&times;</span>}
          {children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  close: PropTypes.func,
  hideX: PropTypes.bool,
  show: PropTypes.bool,
  size: PropTypes.string
};

Modal.defaultProps = {
  close: () => {},
  show: false
};
