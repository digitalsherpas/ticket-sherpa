import React, { Component } from 'react';
import Datetime from 'react-datetime'
import Geosuggest from 'react-geosuggest';
import * as cloudinary from 'cloudinary-core';

export default class HostEvent extends Component {

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.refs.eventStartDateAndTime.state.inputValue);
    console.log(this.refs.eventEndDateAndTime.state.inputValue);
    console.log(this.refs.address.state.userInput);
    console.log(this.refs.imageupload.value);
    this.props.checkAddress(this.refs, this.props.username);
    // this.props.addEvent(this.refs, this.props.username);
  }

  componentDidMount() {
    const cloudinary = document.createElement("script");
    cloudinary.src = "//widget.cloudinary.com/global/all.js";
    cloudinary.async = true;

    document.body.appendChild(cloudinary);
  }

  uploadImage() {
    let context = this;
    window.cloudinary.openUploadWidget({ cloud_name: 'lentan', upload_preset: 'fuwmrjsq'},
      function (error, result) {
        if (!error) {
          context.refs.imageupload.value = result[0].secure_url;
        } else {
          console.log('error', error);
        }
      });
  }

  render() {
    return (
      <div>
        <h2>Create Event</h2>
        <hr />
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <h3>Event Name</h3>
          <input type="text" ref="eventName" placeholder="Event Name"/>
          <h3>Price in Ether</h3>
          <input type="text" ref="price" placeholder="Price"/>
          <h3>Quota</h3>
          <input type="text" ref="quota" placeholder="Quota"/>
          <h3>Description</h3>
          <input type="text" ref="quota" placeholder="Quota"/>
          <hr />

          <h3>Event Start Date & Time</h3>
          <Datetime ref='eventStartDateAndTime' />
          <hr />

          <h3>Event End Date Time</h3>
          <Datetime ref='eventEndDateAndTime' />
          <hr />

          <h3>Event Address</h3>
          <Geosuggest ref="address"/>
          <hr />

          <button type="button" d="upload_widget_opener" ref="imageupload" onClick={this.uploadImage.bind(this)}>Upload Image</button>

          <h3>Submit</h3>
          <input type="submit"/>
        </form>
      </div>
    );
  }
}
