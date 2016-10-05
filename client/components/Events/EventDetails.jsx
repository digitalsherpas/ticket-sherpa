import React from 'react';
import { Link } from 'react-router';

const EventDetails = ({params: { eventName }, location: { query }}) => (
  <div>
    <img src="http://tctechcrunch2011.files.wordpress.com/2008/04/linux-penguin-small.png" />
    <h4>Event Name: {eventName}</h4>
    <p>(((Description Placeholder)))</p>
    <p>Price: {query.price}</p>
    <p>Start Date:{query.eventStartDateTime}</p>
    <p>End Date:{query.eventEndDateTime}</p>
    <p>(((Street Address Placeholder)))</p>
    <p>(((Address Line 2 Placeholder)))</p>
    <p>(((City Placeholder)))</p>
    <p>(((State Placeholder)))</p>
    <p>(((Zip/Postal Code Placeholder)))</p>
    <p>(((Country Placeholder)))</p>
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
