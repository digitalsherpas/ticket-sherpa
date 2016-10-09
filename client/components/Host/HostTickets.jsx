import React, { Component } from 'react';
import { Link } from 'react-router';
import QRCodeLib from 'qrcode';
import HostEvent from '../Host/HostEvent.jsx';

export default class HostTickets extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props)
    this.props.requestTickets(this.props.username);
  }

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
    return (
      <div>
        <h2>My Events</h2>

        <hr></hr>
        <p>All Events</p>
        <ul>
          {this.props.hostEvents.map((hostEvent, i) =>
            <HostEvent
              key={i}
              {...hostEvent}
            />
          )}
        </ul>
        <h3>My Tickets</h3>
        <hr></hr>
        <ul>
          <li>Event 1</li>
          <input type="submit" value="View QR Code" onClick={this.userVerifyTicket.bind(this, '0x47cda3544d436887a0ba2a0fb104b0a82c78edcc')}/>
          <input type="submit" value="Sell Ticket" onClick={this.sellTicket.bind(this)}></input>
          <li>Event 2</li>
          <input type="submit" value="View QR Code" onClick={this.userVerifyTicket.bind(this, '0x47cda3544d436887a0ba2a0fb104b0a82c78edcc')}/>
          <input type="submit" value="Sell Ticket" onClick={this.sellTicket.bind(this)}></input>
          <li>Event 3</li>
          <input type="submit" value="View QR Code" onClick={this.userVerifyTicket.bind(this, '0x47cda3544d436887a0ba2a0fb104b0a82c78edcc')}/>
          <input type="submit" value="Sell Ticket" onClick={this.sellTicket.bind(this)}></input>
        </ul>
        <canvas ref="userVerifyQR"></canvas>
      </div>

    );
  }
}
