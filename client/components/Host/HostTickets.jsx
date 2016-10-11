import React, { Component } from 'react';
import { Link } from 'react-router';
import HostTicket from '../Host/HostTicket.jsx';
// import QRCodeLib from 'qrcode';

export default class HostTickets extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestTickets(this.props.username);
  }

  render() {
    return (
      <div>
        <h2>My Bought Tickets</h2>
        <hr></hr>
        <ul>
          {this.props.hostTickets.map((ticket, i) =>
            <HostTicket
              key={i}
              {...ticket}
            />
          )}
        </ul>
      </div>

    );
  }
}
