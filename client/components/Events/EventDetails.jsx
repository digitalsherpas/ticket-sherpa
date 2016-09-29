import React, { Component } from 'react';

// export default class EventDetails extends Component {
//   render() {
//     return (
//       <div>
//         <h1>This is the EventDetailPage</h1>
//       </div>
//     );
//   }
// }

const EventDetails = ({ event }) => (
  <div>
    <h4>{event.eventName}</h4>
    <p>{event.date}</p>
    <p>{event.time}</p>
    <p>{event.address}</p>
    <p>{event.price}</p>
  </div>
);

export default EventDetails;
