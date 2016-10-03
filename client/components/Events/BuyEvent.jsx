import React, { Component } from 'react';


export default class HostEvent extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.buyEvent(this.refs);
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
          <h2>Submit</h2>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
