import React, { Component } from 'react';

export default class HostEvent extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addEvent(this.refs);
  }
  render() {
    return (
      <div>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Event Name</h2>
          <input type="text" ref="eventName" placeholder="Event Name"/>
          <h2>Price</h2>
          <input type="text" ref="price" placeholder="Price"/>
          <h2>Quota</h2>
          <input type="text" ref="quota" placeholder="Quota"/>
          <h2>Event Start Date Time</h2>
          <input type="text" ref="eventStartDateTime" placeholder="Event Start Date Time"/>
          <h2>Event End Date Time</h2>
          <input type="text" ref="eventEndDateTime" placeholder="Event End Date Time"/>
          <h2>Wallet Address</h2>
          <input type="text" ref="walletAddress" placeholder="Wallet Address"/>
          <h2>Submit</h2>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
