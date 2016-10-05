import React from 'react';
import { Link } from 'react-router';

const EventDetails = ({params: { eventName }, location: { query }}) => (
  <div>
    <h4>Event Name: {eventName}</h4>
    <p>Start Date:{query.eventStartDateTime}</p>
    <p>End Date:{query.eventEndDateTime}</p>
    <p>Price: {query.price}</p>
    <p>(((Description Placeholder)))</p>
    <p>(((Street Address Placeholder)))</p>
    <p>(((Address Line 2 Placeholder)))</p>
    <p>(((City Placeholder)))</p>
    <p>(((State Placeholder)))</p>
    <p>(((Zip/Postal Code Placeholder)))</p>
    <p>(((Country Placeholder)))</p>
    <img src="https://images-na.ssl-images-amazon.com/images/G/01/aplusautomation/vendorimages/a6f8620a-9d8b-424b-b36a-eb326129a059.png._CB320335955__SR285,285_.png" />

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
};

export default EventDetails;
