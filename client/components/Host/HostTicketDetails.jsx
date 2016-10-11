import React, { Component, PropTypes } from 'react';
import QRCodeLib from 'qrcode';
import axios from 'axios';

export default class HostTicketDetails extends Component {

  userVerifyTicket(eventContractAddress, e) {
    e.preventDefault();
    const name = this.props.username;
    const address = web3.eth.coinbase;
    const qrcodedraw = new QRCodeLib.QRCodeDraw();
    const qrstring = 'localhost:3000/?verify/&name=' + name +
                    '&eventContractAddress=' + eventContractAddress +
                    '&userWalletAddress=' + address;

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
    const price = this.props.hostTickets[i].price;
    const eventStartDateTime = this.props.hostTickets[i].eventStartDateTime;
    const eventEndDateTime = this.props.hostTickets[i].eventEndDateTime;
    const eventContractAddress = this.props.hostTickets[i].eventContractAddress;

    // event address
    const addressLine1 = this.props.hostTickets[i].addressLine1;
    const addressLine2 = this.props.hostTickets[i].addressLine2;
    const city = this.props.hostTickets[i].city;
    const zipPostalCode = this.props.hostTickets[i].zipPostalCode;
    const state = this.props.hostTickets[i].state;
    const country = this.props.hostTickets[i].country;

    return (
      <div>
        <form onSubmit={this.userVerifyTicket.bind(this, this.props.hostTickets[i].eventContractAddress)}>
          <h2>User Verify Ticket</h2>
          <p>QR text: localhost:3000/verify/?&name={this.props.username}&eventContractAddress={eventContractAddress}&userWalletAddress={web3.eth.coinbase}</p>
          <input type="submit" value="User Verify Ticket"/>
        </form>
        <canvas ref="userVerifyQR"></canvas>

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
        </div>
    );
  }
}

HostTicketDetails.propTypes = {
  hostTickets: PropTypes.arrayOf(PropTypes.shape({
    eventName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    eventStartDateTime: PropTypes.string.isRequired,
    eventEndDateTime: PropTypes.string.isRequired,
    addressLine1: PropTypes.string.isRequired,
    addressLine2: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    zipPostalCode: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    eventContractAddress: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
