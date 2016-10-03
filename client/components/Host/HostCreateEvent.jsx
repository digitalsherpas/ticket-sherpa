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
          <h3>Event Name</h3>
          <input type="text" ref="eventName" placeholder="Event Name"/>
          <h3>Price</h3>
          <input type="text" ref="price" placeholder="Price"/>
          <h3>Quota</h3>
          <input type="text" ref="quota" placeholder="Quota"/>
          <h3>Event Start Date & Time</h3>
          <h5>Day</h5>
          <input type="text" ref="eventStartDay" placeholder="Event Start Date Time"/>
          <h5>Month</h5>
          <input type="text" ref="eventStartMonth" placeholder="Event Start Date Time"/>
          <h5>Year</h5>
          <input type="text" ref="eventStartYear" placeholder="Event Start Date Time"/>
          <h5>Time</h5>
          <input type="text" ref="eventStartTime" placeholder="Event Start Date Time"/>
          <h3>Event End Date Time</h3>
          <h5>Day</h5>
          <input type="text" ref="eventEndDay" placeholder="Event Start Date Time"/>
          <h5>Month</h5>
          <input type="text" ref="eventEndMonth" placeholder="Event Start Date Time"/>
          <h5>Year</h5>
          <input type="text" ref="eventEndYear" placeholder="Event Start Date Time"/>
          <h5>Time</h5>
          <input type="text" ref="eventEndTime" placeholder="Event Start Date Time"/>
          <h3>Wallet Address</h3>
          <input type="text" ref="walletAddress" placeholder="Wallet Address"/>
          <h3>Submit</h3>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
