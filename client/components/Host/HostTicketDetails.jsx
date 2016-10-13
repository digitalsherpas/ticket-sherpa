import React, { Component, PropTypes } from 'react';
import QRCodeLib from 'qrcode';
import axios from 'axios';

export default class HostTicketDetails extends Component {

  componentDidMount() {
    const i = this.props.hostTickets.findIndex((event) =>
      event.eventName === this.props.params.eventName);

    const eventContractAddress = this.props.hostTickets[i].eventContractAddress;
    const userWalletAddress = this.props.hostTickets[i].userWalletAddress;

    this.userVerifyTicket(eventContractAddress, userWalletAddress);
  }

  userVerifyTicket(eventContractAddress, userWalletAddress, e) {
    const name = this.props.username;
    const qrcodedraw = new QRCodeLib.QRCodeDraw();
    const qrstring = 'https://www.ticketsherpa.co/verify/?&name=' + name +
                    '&eventContractAddress=' + eventContractAddress +
                    '&userWalletAddress=' + userWalletAddress;

    qrcodedraw.draw(this.refs.userVerifyQR, qrstring, function(error, canvas) {
      if (error) {
         console.log('Error =( ',error);
      }
    });
  }

  render() {
    const i = this.props.hostTickets.findIndex((event) =>
      event.eventName === this.props.params.eventName);

    // event info
    const eventName = this.props.hostTickets[i].eventName;
    const description = this.props.hostTickets[i].description;
    const image = this.props.hostTickets[i].image;
    const price = this.props.hostTickets[i].price / 1000000000000000000;
    const eventStartDateTime = this.props.hostTickets[i].eventStartDateTime;
    const eventEndDateTime = this.props.hostTickets[i].eventEndDateTime;

    // event address
    const addressLine1 = this.props.hostTickets[i].addressLine1;
    const addressLine2 = this.props.hostTickets[i].addressLine2;
    const city = this.props.hostTickets[i].city;
    const zipPostalCode = this.props.hostTickets[i].zipPostalCode;
    const state = this.props.hostTickets[i].state;
    const country = this.props.hostTickets[i].country;

    return (
      <div>
        <h2>Event Info</h2>
        <h4>Event Name: {eventName}</h4>
        <h4>Description: {description}</h4>
        <h4>Image: {image}</h4>
        <h4>Price: {price} ETH</h4>
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
        <h2>Ticket QR Code</h2>
        <canvas ref="userVerifyQR"></canvas>
        </div>
    );
  }
}

HostTicketDetails.propTypes = {
  hostTickets: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    eventStartDateTime: PropTypes.string.isRequired,
    eventEndDateTime: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipPostalCode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    eventContractAddress: PropTypes.string.isRequired,
    userWalletAddress: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
