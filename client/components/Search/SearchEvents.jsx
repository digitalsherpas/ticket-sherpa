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
    console.log(this.props.searchEvents(this.refs.search.value));
    // console.log(this.refs.search.value);
  }

  render() {
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
