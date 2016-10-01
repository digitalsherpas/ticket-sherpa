import React, { Component } from 'react';

// create a React Component to search through passed down events
export default class SearchEvents extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // style the header and input field inline
    console.log(this.props.searchEvents);
    return (
      <form>
        <h4>Search</h4>
        <input type="text" />
        <button>Submit</button>
      </form>
    );
  }
}
