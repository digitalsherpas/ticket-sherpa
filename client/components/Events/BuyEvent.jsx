import React, { Component } from 'react';
import QRCodeLib from 'qrcode'

export default class HostEvent extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.buyEvent(this.refs, this.props.params.eventName);
  }

  viewQRCode(e) {
    e.preventDefault();
    const qrcodedraw = new QRCodeLib.QRCodeDraw();

    const test = qrcodedraw.draw(this.refs.qrcanvas, this.props.location.query.contractAddress, function(error,canvas){
      if(error){
         return console.log('Error =( ',error);
      }
    });
  }
  render() {
    return (
      <div>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <h2></h2>
          <h2></h2>
          <h1>Buy Ticket</h1>
          <h2>Name</h2>
          <input type="text" ref="name" placeholder="Name"/>
          <h2>Wallet Address</h2>
          <input type="text" ref="walletAddress" placeholder="Wallet Address"/>
          <h2>Contract Address</h2>
          {this.props.location.query.contractAddress}
          <h2>Submit</h2>
          <input type="submit"/>
        </form>
        <form onSubmit={this.viewQRCode.bind(this)}>

        <hr></hr>
        <h2>View QR Code</h2>
        <input type="submit" value="View"/>
        </form>
        <canvas id="test" ref="qrcanvas"></canvas>

      </div>
    );
  }
}
