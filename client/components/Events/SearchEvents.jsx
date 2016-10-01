import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class SearchEvents extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.search.value);
  }

  render() {
    // style the header and input field inline
    console.log(this.props.searchEvents);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Search</h4>
          <input ref="search" type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
