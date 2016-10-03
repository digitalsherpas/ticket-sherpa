import React from 'react';
import { Link } from 'react-router';

const EventDetails = ({params: { eventName }, location: { query }}) => (
  <div>
    <h4>{eventName}</h4>
    <p>{query.eventStartDate}</p>
    <p>{query.price}</p>
    <h4><Link 
      to={{ pathname:
        '/buyevent/' + eventName,
        query: {
          eventName,
        },
    }}
    >Buy Ticket</Link></h4>

  </div>
);

export default EventDetails;
