import React, { Component } from 'react';
import Datetime from 'react-datetime'

export default class HostEvent extends Component {

  handleSubmit(e) {
    e.preventDefault();
    this.props.checkAddress(this.refs, this.props.username);
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
      <div className="content__container">
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
          <input type="text" ref="description" placeholder="Quota"/>
          <hr />

          <h3>Event Start Date & Time</h3>
          <Datetime ref='eventStartDateAndTime' />
          <hr />

          <h3>Event End Date Time</h3>
          <Datetime ref='eventEndDateAndTime' />
          <hr />

          <button type="button" d="upload_widget_opener" ref="imageupload" onClick={this.uploadImage.bind(this)}>Upload Image</button>

          <h3>Event Address</h3>
          <h5>Street Address</h5>
          <input type="text" ref="addressLine1" placeholder="Street Address"/>
          <h5>Address Line 2</h5>
          <input type="text" ref="addressLine2" placeholder="Address Line 2"/>
          <h5>City</h5>
          <input type="text" ref="city" placeholder="City"/>
          <h5>State</h5>
          <input type="text" ref="state" placeholder="State"/>
          <h5>Zip/Postal Code</h5>
          <input type="text" ref="zipPostalCode" placeholder="Zip/Postal Code"/>
          <h5>Country</h5>
          <input type="text" ref="country" placeholder="Country"/>
          <h3>Submit</h3>
          <input type="submit"/>
          </form>
      </div>
    );
  }
}
