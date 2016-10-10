import React, { Component, PropTypes } from 'react';
import QRCodeLib from 'qrcode';

export default class HostEventDetails extends Component {
  userVerifyTicket(contract) {
    console.log(contract);
    const qrcodedraw = new QRCodeLib.QRCodeDraw();
    const qrstring = 'localhost:3000/verify';

    qrcodedraw.draw(this.refs.userVerifyQR, qrstring, function(error,canvas){
      if(error){
         return console.log('Error =( ',error);
      }
    });
  }

  sellTicket(e) {
    e.preventDefault();
    console.log('sell ticket')
  }

  render() {
    const i = this.props.hostEvent.findIndex((event) =>
      event.eventName === this.props.params.eventName);

    // event info
    const eventName = this.props.hostEvent[i].eventName;
    const description = this.props.hostEvent[i].description;
    const image = this.props.hostEvent[i].image;
    const price = this.props.hostEvent[i].price;
    const eventStartDateTime = this.props.hostEvent[i].eventStartDateTime;
    const eventEndDateTime = this.props.hostEvent[i].eventEndDateTime;

    // event address
    const addressLine1 = this.props.hostEvent[i].addressLine1;
    const addressLine2 = this.props.hostEvent[i].addressLine2;
    const city = this.props.hostEvent[i].city;
    const zipPostalCode = this.props.hostEvent[i].zipPostalCode;
    const state = this.props.hostEvent[i].state;
    const country = this.props.hostEvent[i].country;

    // host info
    const hostname = this.props.hostEvent[i].hostname;
    const eventContractAddress = this.props.hostEvent[i].eventContractAddress;
    const quota = this.props.hostEvent[i].quota;
    const id = this.props.hostEvent[i].id;
    const eventCreateDateTime = this.props.hostEvent[i].eventCreateDateTime;
    const createdAt = this.props.hostEvent[i].createdAt;
    const updatedAt = this.props.hostEvent[i].updatedAt;
    // const numAttendees = this.props.hostEvent[i].numAttendees;
    // const attendeesPaid = this.props.hostEvent[i].attendeesPaid;

    return (
      <div>
        <h2>Event Info</h2>
        <h4>Event Name: {eventName}</h4>
        <h4>Description: {description}</h4>
        <h4>Image: {image}</h4>
        <h4>Price: {price}</h4>
        <h4>Event Start Date & Time: {eventStartDateTime}</h4>
        <h4>Event End Date & Time: {eventEndDateTime}</h4>
        <hr></hr>

        <h2>Event Address</h2>
        <h4>Address Line 1: {addressLine1}</h4>
        <h4>Address Line 2: {addressLine2}</h4>
        <h4>City: {city}</h4>
        <h4>Zip Code: {zipPostalCode}</h4>
        <h4>State: {state}</h4>
        <h4>Country: {country}</h4>
        <hr></hr>

        <h2>Host Info</h2>
        <h4>Host Username: {hostname}</h4>
        <h4>Event Contract Address: {eventContractAddress}</h4>
        <h4>Quota: {quota}</h4>
        <h4>ID: {id}</h4>
        <h4>Event Create Date Time: {eventCreateDateTime}</h4>
        <h4>Created At: {createdAt}</h4>
        <h4>Updated At: {updatedAt}</h4>

        <input type="submit" value="View QR Code" onClick={this.userVerifyTicket.bind(this, '0x47cda3544d436887a0ba2a0fb104b0a82c78edcc')}/>
        <input type="submit" value="Sell Ticket" onClick={this.sellTicket.bind(this)}></input>
        <p></p>
        <canvas ref="userVerifyQR"></canvas>
      </div>
    );
  }
}

HostEventDetails.propTypes = {
  hostEvent: PropTypes.arrayOf(PropTypes.shape({
    quota: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    eventName: PropTypes.string.isRequired,
    eventCreateDateTime: PropTypes.string.isRequired,
    eventStartDateTime: PropTypes.string.isRequired,
    eventEndDateTime: PropTypes.string.isRequired,

  }).isRequired).isRequired,
};
