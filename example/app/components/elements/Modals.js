import React, { Component } from 'react';
import { Modal, Button } from '../../../../src';

export default class Modals extends Component {

  state = {
    modalOpen: false
  }

  toggleModal = () => {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  render() {
    return (
      <div id='modals'>
        <h6 className='docs-header'>Modals</h6>
        <p>Sweet, sweet modals.</p>
        <Button onClick={this.toggleModal}>Open A Modal</Button>

        <Modal close={this.toggleModal} show={this.state.modalOpen}>
          <h4>Modal Magic</h4>
          <p>For when you really, really need a user's attention</p>
        </Modal>
      </div>
    );
  }
}
