import React from 'react';

const EventDetails = ({
  params: { eventName },
  location: { query },
}) => (
  <div>
    <h1>Hello</h1>
    <h4>{eventName}</h4>
    <p>{query.eventStartDate}</p>
    <p>{query.price}</p>
  </div>
);

export default EventDetails;
