import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Modal from 'react-modal';

export default class HostCreateConfirmation extends Component {
  requestCloseFn() {
    browserHistory.push('/account');
  }

  render() {
    const customModalStyle = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    };

    return (
      <div>
        <Modal
          isOpen={true}
          onRequestClose={this.requestCloseFn.bind(this)}
          style={customModalStyle}>
          <h3>Your event is being created and verified on the blockchain. It will appear on your account page momentarily.</h3>
        </Modal>
      </div>
    );
  }
}
