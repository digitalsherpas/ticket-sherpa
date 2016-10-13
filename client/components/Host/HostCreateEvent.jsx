import React, { Component } from 'react';
import Datetime from 'react-datetime';
import Modal from 'react-modal';
import { browserHistory } from 'react-router';
import CloudinaryImage from 'react-cloudinary-img';

export default class HostEvent extends Component {

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
    let context = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'lentan', upload_preset: 'fuwmrjsq'},
      function (error, result) {
        if (!error) {
          context.refs.imageupload.value = result[0].secure_url;
        }
      });
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
    const yesterday = Datetime.moment().subtract(1, 'day');
    const valid = function( current ){
        return current.isAfter( yesterday );
    };

    return (
      <div className="content__container">
        <Modal
          isOpen={metaMaskNotInstalled}
          // onAfterOpen={afterOpenFn}
          onRequestClose={this.requestCloseFn.bind(this)}
          // closeTimeoutMS={n}
          style={customModalStyle}>
          <h3>Ticket Sherpa runs on the decentralized Ethereum network using Smart Contracts.</h3>
          <h4>In order to purchase tickets or create events, you need to:</h4>
          <a href="https://metamask.io"><img width="200px" src='http://i.imgur.com/t8is7Ud.png' /></a>
        </Modal>
        <form ref="eventForm" onSubmit={this.handleSubmit.bind(this)}>
          <div className="event-form">

            <div className="create-event-header">Create An Event</div>
            <div className="event-details-wrapper">Event Details</div>
            <div className="event-details-container">
              <div className="event-title-description">
                <div>Event Title</div>
                <div><input className="event-name-input" type="text" ref="eventName" placeholder="Give your event a name" /></div>
                <div>Description</div>
                <div><input className="event-name-input" type="text" ref="description" placeholder="Description" /></div>
              </div>
              <div className="event-other-description">
                <div>Event Price (ETH)</div>
                <div><input  type="text" ref="price" placeholder="Price" /></div>
                <div>Quota</div>
                <div><input type="text" ref="quota" placeholder="Quota" /></div>
              </div>
            </div>

            <div className="event-start-end-container">
              <div className="start-date-picker">
                <div><span>Event Start Date & Time</span></div>
                <div><Datetime ref='eventStartDateAndTime' isValidDate={ valid }/></div>
              </div>
              <div className="end-date-picker">
                <div><span>Event End Date & Time</span></div>
                <div><Datetime ref='eventEndDateAndTime' isValidDate={ valid } /></div>
              </div>
            </div>

            <div className="event-location-container">
              <div className="event-location-left">
                <div>Event Location</div>
                <input type="text" className="event-location-input" ref="addressLine1" placeholder="Street Address"/>
                <input type="text" className="event-location-input" ref="addressLine2" placeholder="Address Line 2"/>
                <input type="text" className="event-location-input" ref="city" placeholder="City"/>
                <input type="text" className="event-location-input" ref="zipPostalCode" placeholder="Zip/Postal Code"/>
                <input type="text" className="event-location-input" ref="state" placeholder="State"/>
                <input type="text" className="event-location-input" ref="country" placeholder="Country"/>
              </div>
              <div className="event-location-right">
                <a href='#'><div className="image-container" ref="imageupload" onClick={this.uploadImage.bind(this)}>Image Upload</div></a>
              </div>
            </div>

            <div>
            <input type="submit" value="Create Event"/>
            </div>
          </div>
        </form>
        <CloudinaryImage image={this.ref} cloudName="lentan" options={{ width: 100, height: 100, crop: 'fill' }} className="img-rounded" />
      </div>
    );
  }
}
