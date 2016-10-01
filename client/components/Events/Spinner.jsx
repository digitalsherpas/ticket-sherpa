import React, { PropTypes, Component } from 'react';
import MDSpinner from "react-md-spinner";

export default class Spinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MDSpinner />
    );
  }
}
