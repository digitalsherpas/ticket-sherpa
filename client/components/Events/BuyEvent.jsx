import React, { Component } from 'react';
import QRCodeLib from 'qrcode'

export default class HostEvent extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    // e.preventDefault();
    // this.props.buyEvent(this.refs, this.props.params.eventName);
    e.preventDefault();
    // console.log(web3.eth.coinbase);
    // console.log(this.props.location.query.contractAddress)
    // web3.eth.sendTransaction({from: web3.eth.coinbase, to: this.props.location.query.contractAddress, value: web3.toWei(1, "ether")})
    // contract = web3.eth.contract(this.props.location.query.contractAddress, contractDesc);
    // contract.SetMessage.sendTransaction(document.getElementById('message').value, {from: web3.eth.coinbase, value:web3.toWei('2','ether')});
    web3.eth.sendTransaction({ from: web3.eth.accounts[0], to: this.props.location.query.contractAddress, value: web3.toWei(1, "ether") }, function (err) {console.dir(arguments)})
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
          <h2>Buy with Meta Mask</h2>
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
