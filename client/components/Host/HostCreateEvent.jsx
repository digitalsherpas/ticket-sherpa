import React, { Component } from 'react';

export default class HostEvent extends Component {
  render() {
    return (
      <div>
        <h1>Host Event</h1>
        <h2>Event Name</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
        <h2>Date</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
        <h2>Time</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
        <h2>Address</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
        <h2>Price</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" />
        </form>
        <input type="submit" />
      </div>
    );
  }
}