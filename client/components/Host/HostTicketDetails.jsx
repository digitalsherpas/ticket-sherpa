import React, { Component, PropTypes } from 'react';
import QRCodeLib from 'qrcode';
import axios from 'axios';
import moment from 'moment';

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
         alert('Unable to draw QR code')
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
      <div className="content__container">
        <div className="ticket__container">
          <div className="ticket__header">
            <img className="ticket-header-left" height="50%" width="50%" src={image} />
            
          </div>
          <div className="ticket__info">
            <div className="ticket__info-left">
              
              <div>
                <div className="ticket__header-name">{eventName}</div>
                <div className="ticket__bought-time">Time</div>
                <div className="ticket__header-start">{moment.utc(eventStartDateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
                <div className="ticket__header-end">{moment.utc(eventEndDateTime).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
                <div className="ticket__header-bought-description">Description</div>
                <div>{description}</div>
                
              </div>
            </div>
              <div className="ticket__info-right">
                <div className="ticket__info-address-header-bought">Event Location</div>
                <div className="ticket__info-address-1">{addressLine1}</div>
                <div className="ticket__info-address-2">{addressLine2}</div>
                <div className="ticket__info-address-city">{city}, {state}, {zipPostalCode}</div>
            </div>

          </div>
          <div>
            <div className="ticket__info-qr">
              <canvas ref="userVerifyQR"></canvas>
            </div>
          </div>
        </div>
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
