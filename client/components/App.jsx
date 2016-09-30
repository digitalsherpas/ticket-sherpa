import React, { Component } from 'react';
import { Link } from 'react-router';

// renders logo and maps props
export default class App extends Component {
  render() {
    return (
      <div>
        <h1><Link to={'/'}>Tickether</Link></h1>
        <hr></hr>
        {this.props.children}
      </div>
    );
  }
}
