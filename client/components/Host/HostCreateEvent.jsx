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
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.checkAddressEntered = this.checkAddressEntered.bind(this);
  }

  handleSubmit(e) {
    console.log('in submit')
    e.preventDefault();
    // this.checkAddressEntered();
    this.props.checkAddress(this.refs, this.props.username);
  }

  checkAddressEntered() {
    if (this.refs.addressLine1.value.length === 0 && this.refs.city.value.length === 0 && this.refs.state.value.length === 0 && this.refs.zipPostalCode.value.length === 0) {
      this.setState({
        noAddress: this.props.addressEntered,
      });
    }
  }

  componentDidMount() {
    const cloudinary = document.createElement("script");
    cloudinary.src = "//widget.cloudinary.com/global/all.js";
    cloudinary.async = true;

    document.body.appendChild(cloudinary);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.checkAddress(this.refs, this.props.username);
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
      <div className="content__container">
        <Modal
          isOpen={metaMaskNotInstalled}
          onRequestClose={this.requestCloseFn.bind(this)}
          style={customModalStyle}>
          <h3>Ticket Sherpa runs on the decentralized Ethereum network using Smart Contracts.</h3>
          <h4>In order to purchase tickets or create events, you need to:</h4>
          <a href="https://metamask.io"><img width="200px" src='http://i.imgur.com/t8is7Ud.png' /></a>
        </Modal>
        <form ref="eventForm" onSubmit={this.handleSubmit.bind(this)}>
          <div className="event__container">

            <div className="event__create-header">Create An Event</div>
            <div className="event__details-wrapper">Event Details</div>
            <div className="event__details-container">
              <div className="event__details-container-left">
                <div>Event Title</div>
                <div><input className="event__input-fields" type="text" ref="eventName" placeholder="Give your event a name" /></div>
                <div>Description</div>
                <div><input className="event__input-fields" type="text" ref="description" placeholder="Description" /></div>
              </div>
              <div className="event__details-container-right">
                <div>Event Price (ETH)</div>
                <div><input  type="text" ref="price" placeholder="Price" /></div>
                <div>Quota</div>
                <div><input type="text" ref="quota" placeholder="Quota" /></div>
              </div>
            </div>

            <div className="event__start-end-container">
              <div className="event__start-date-picker">
                <div><span>Starts</span></div>
                <div><Datetime ref='eventStartDateAndTime' isValidDate={ startDateValid } closeOnSelect={true}/></div>
              </div>
              <div className="event__end-date-picker">
                <div><span>Ends</span></div>
                <div><Datetime ref='eventEndDateAndTime' isValidDate={ startDateValid } closeOnSelect={true}/></div>
              </div>
            </div>

            <div className="event__location-container">
              <div className="event__location-left">
                <div>Event Location</div>
                <input type="text" className="event__location-input" ref="addressLine1" placeholder="Street Address"/>
                <input type="text" className="event__location-input" ref="addressLine2" placeholder="Address Line 2"/>
                <input type="text" className="event__location-input" ref="city" placeholder="City"/>
                <input type="text" className="event__location-input" ref="zipPostalCode" placeholder="Zip/Postal Code"/>
                <input type="text" className="event__location-input" ref="state" placeholder="State"/>
                <input type="text" className="event__location-input" ref="country" placeholder="Country"/>
              </div>
              <div className="event__location-right">

              </div>
            </div>

            <div className="event__image-container">
              <div className="event__image-container-left">
                <a href='#'>
                  <div className="event__image-container" ref="imageupload" onClick={this.uploadImage.bind(this)}>
                    <img className="event__image-container-preview" src={imagePreviewUrl}/>
                  </div>
                </a>
              </div>
              <div className="event-image-container-right">
              </div>
            </div>

            <div>
            <input type="submit" value="Create Event" onClick={this.handleSubmit.bind(this)}/>
            </div>
          </div>
        </form>
        </div>
    );
  }
}
