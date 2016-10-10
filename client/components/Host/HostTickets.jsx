import React, { Component } from 'react';
import { Link } from 'react-router';
import Event from '../Events/Event.jsx';

export default class HostTickets extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
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
        <ul>
          {this.props.hostTickets.map((ticket, i) =>
            <Event
              key={i}
              {...ticket}
            />
          )}
        </ul>
      </div>

    );
  }
}
