import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class SearchEvents extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(e) {
  //   e.preventDefault()
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchEvents(this.refs.search.value);
  }

  render() {
    return (
      <div className='nav__home-search-bar'>
        <form className="nav__home-search-bar-form" onSubmit={this.handleSubmit}>
          <input className="nav__home-search-input" ref="search" type="text" placeholder="Search for events"/>
          <button className="nav__home-search-submit-btn">Search</button>
        </form>
      </div>
    );
  }
}
