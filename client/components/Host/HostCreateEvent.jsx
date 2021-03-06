import React, { Component } from 'react';
import Datetime from 'react-datetime';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';

export default class HostEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePreviewUrl: 'http://i.imgur.com/CwfPFDI.png',
      noAddress: '',
      requiredFields: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAddressEntered = this.checkAddressEntered.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.checkAddressEntered();
    this.props.checkAddress(this.refs, this.props.username);
  }

  checkAddressEntered() {
    if (this.refs.addressLine1.value.length === 0 || this.refs.city.value.length === 0 || this.refs.state.value.length === 0 || this.refs.zipPostalCode.value.length === 0) {
      this.setState({
        noAddress: this.props.error,
        requiredFields: '  -  This is a required field',
      });
    }
  }

  componentDidMount() {
    const cloudinary = document.createElement("script");
    cloudinary.src = "//widget.cloudinary.com/global/all.js";
    cloudinary.async = true;

    document.body.appendChild(cloudinary);
  }

  uploadImage() {
    cloudinary.openUploadWidget.bind(this)({ cloud_name: 'lentan', upload_preset: 'fuwmrjsq'},
      function (error, result) {
        if (!error) {
          this.refs.imageupload.value = result[0].secure_url;
          this.setState({imagePreviewUrl: result[0].secure_url})
        } else {
          console.log('error', error);
        }
      }.bind(this));
  }

  requestCloseFn() {
    browserHistory.push('/account');
  }

  render() {
    let metaMaskNotInstalled = true;
    if (typeof web3 !== 'undefined') {
      metaMaskNotInstalled = false;
    }

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

    let {imagePreviewUrl} = this.state;

    const yesterday = Datetime.moment().subtract(1, 'day');
    const startDateValid = function( current ){
        return current.isAfter( yesterday );
    };

    const endDateValid = function( current ){
        return current.isAfter( yesterday );
    }

    return (
      <div className="createEvent__container">
        <Modal
          isOpen={metaMaskNotInstalled}
          onRequestClose={this.requestCloseFn.bind(this)}
          style={customModalStyle}>
          <h3>Ticket Sherpa runs on the decentralized Ethereum network using Smart Contracts.</h3>
          <h4>In order to purchase tickets or create events, you need to:</h4>
          <a href="https://metamask.io"><img width="200px" src='http://i.imgur.com/t8is7Ud.png' /></a>
        </Modal>
        <form className="createEvent__form" ref="eventForm" onSubmit={this.handleSubmit}>
          <div className="createEvent__container-div">

            <h1 className="createEvent__container-header">Create An Event</h1>
            <div className="createEvent__container-content">
              <h2 className="createEvent__container-subheader">1) Details</h2>
              <div className="createEvent__container-section">
                <h4 className="createEvent__container-field">Title {this.state.requiredFields}</h4>
                <input className="createEvent__container-input" type="text" ref="eventName" placeholder="Give your event a name" />
                <h4 className="createEvent__container-field">Description {this.state.requiredFields}</h4>
                <input className="createEvent__container-input" type="text" ref="description" placeholder="Description" />
                <h4 className="createEvent__container-field">Price (ETH) {this.state.requiredFields}</h4>
                <input className="createEvent__container-input" type="text" ref="price" placeholder="Price" />
                <h4 className="createEvent__container-field">Quota {this.state.requiredFields}</h4>
                <input className="createEvent__container-input" type="text" ref="quota" placeholder="Quota" />
              </div>

              <h2 className="createEvent__container-subheader">2) Date</h2>
              <div className="createEvent__container-section">
                <h4 className="createEvent__container-field"><span>Starts {this.state.requiredFields}</span></h4>
                <div><Datetime ref='eventStartDateAndTime' isValidDate={ startDateValid } closeOnSelect={true}/></div>
                <h4 className="createEvent__container-field"><span>Ends {this.state.requiredFields}</span></h4>
                <div><Datetime ref='eventEndDateAndTime' isValidDate={ startDateValid } closeOnSelect={true}/></div>
              </div>

              <h2 className="createEvent__container-subheader">3) Location</h2>
              <div className="createEvent__container-section">
                <h4 className="createEvent__container-field">Street Address {this.state.requiredFields}</h4>
                <input type="text" className="createEvent__container-input" ref="addressLine1" placeholder="Street Address"/>
                <h4 className="createEvent__container-field">Line 2</h4>
                <input type="text" className="createEvent__container-input" ref="addressLine2" placeholder="Address Line 2"/>
                <h4 className="createEvent__container-field">City {this.state.requiredFields}</h4>
                <input type="text" className="createEvent__container-input" ref="city" placeholder="City"/>
                <h4 className="createEvent__container-field">State {this.state.requiredFields}</h4>
                <input type="text" className="createEvent__container-input" ref="state" placeholder="State"/>
                <h4 className="createEvent__container-field">Zip/Postal Code {this.state.requiredFields}</h4>
                <input type="text" className="createEvent__container-input" ref="zipPostalCode" placeholder="Zip/Postal Code"/>
                <h4 className="createEvent__container-field">Country</h4>
                <input type="text" className="createEvent__container-input" ref="country" placeholder="Country"/>
              </div>

              <h2 className="createEvent__container-subheader">4) Image</h2>
              <div className="createEvent__container-section-image">
                <a href='#'>
                  <div className="createEvent__image-container" ref="imageupload" onClick={this.uploadImage.bind(this)}>
                    <img className="createEvent__image" src={imagePreviewUrl}/>
                  </div>
                </a>
              </div>

              <div>
                <h4 className="createEvent__container-field-error">{this.state.noAddress}</h4>
                <input className="nav__home-search-submit-btn" type="submit" value="Create Event" onClick={this.handleSubmit}/>
              </div>
            </div>
          </div>
        </form>
        </div>
    );
  }
}
