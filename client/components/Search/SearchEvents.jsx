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
      <div className='home__search-bar'>
        <form onSubmit={this.handleSubmit}>
            <input className="home__search-input" ref="search" type="text" />
            <button className="home_search-submit-btn">Submit</button>
        </form>
      </div>
    );
  }
}
