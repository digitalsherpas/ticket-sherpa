import React, { Component } from 'react';

export default class HostEvent extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.addEvent(this.refs.eventName.value, 
      this.refs.date.value, 
      this.refs.time.value, 
      this.refs.address.value, 
      this.refs.price.value);
  }
  render() {
    return (
      <div>
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <h2>Event Name</h2>
          <input type="text" ref="eventName" placeholder="Event Name"/>
          <h2>Date</h2>
          <input type="text" ref="date" placeholder="Date"/>
          <h2>Time</h2>
          <input type="text" ref="time" placeholder="Time"/>
          <h2>Address</h2>
          <input type="text" ref="address" placeholder="Address"/>
          <h2>Price</h2>
          <input type="text" ref="price" placeholder="Price"/>
          <h2>Submit</h2>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
