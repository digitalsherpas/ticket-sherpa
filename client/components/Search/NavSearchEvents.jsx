import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class NavSearchEvents extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchEvents(this.refs.search.value);
  }

  render() {
    return (
      <form className="nav__search-bar-form" onSubmit={this.handleSubmit}>
        <input className="nav__search-input" ref="search" type="text" placeholder="Search for events"/>
        {/* <button className="nav__search-submit-btn">Search</button> */}
      </form>
    );
  }
}
