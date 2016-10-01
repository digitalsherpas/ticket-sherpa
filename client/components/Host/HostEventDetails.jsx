import React, { Component, PropTypes } from 'react';

export default class HostEventDetails extends Component {
  render() {
    const i = this.props.hostEvent.findIndex((event) =>
      event.eventName === this.props.params.eventName);

    const numAttendees = this.props.hostEvent[i].numAttendees;
    const attendeesPaid = this.props.hostEvent[i].attendeesPaid;
    const quota = this.props.hostEvent[i].quota;
    const price = this.props.hostEvent[i].price;
    const eventName = this.props.hostEvent[i].eventName;
    const eventCreateDateTime = this.props.hostEvent[i].eventCreateDateTime;
    const eventStartDateTime = this.props.hostEvent[i].eventStartDateTime;
    const eventEndDateTime = this.props.hostEvent[i].eventEndDateTime;

    return (
      <div>
        <h1>Event Name: {eventName}</h1>
        <h1>Attendees Paid: {attendeesPaid}</h1>
        <h1>Number of Attendees: {numAttendees}</h1>
        <h1>Quota: {quota}</h1>
        <h1>Price: {price}</h1>
        <h1>Event Create Date Time: {eventCreateDateTime}</h1>
        <h1>Event Start Date Time: {eventStartDateTime}</h1>
        <h1>Event End Date Time: {eventEndDateTime}</h1>
      </div>
    );
  }
}

HostEventDetails.propTypes = {
  hostEvent: PropTypes.arrayOf(PropTypes.shape({
    numAttendees: PropTypes.string.isRequired,
    attendeesPaid: PropTypes.string.isRequired,
    quota: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    eventName: PropTypes.string.isRequired,
    eventCreateDateTime: PropTypes.string.isRequired,
    eventStartDateTime: PropTypes.string.isRequired,
    eventEndDateTime: PropTypes.string.isRequired,

  }).isRequired).isRequired,
};
