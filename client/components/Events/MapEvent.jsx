import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Moment from 'moment';

const buildUrl = (url, parameters) => {
  var qs = "";
  for(var key in parameters) {
    var value = parameters[key];
    qs += encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
  }
  if (qs.length > 0){
    qs = qs.substring(0, qs.length-1); //chop off last "&"
    url = url + "?" + qs;
  }
  return url;
};

const MapEvent = ({ eventName, description, eventStartDateTime, eventEndDateTime, eventContractAddress, price, addressLine1, addressLine2, city, state, zipPostalCode, country, id, image }) => (
  <div className="map__events-container">
    <div className="map__events-image-container">
      {/* <Link
        to={{ pathname:
        '/events/' + eventName,
        query: {
          eventName,
          description,
          eventStartDateTime,
          eventEndDateTime,
          eventContractAddress,
          price,
          addressLine1,
          addressLine2,
          city,
          state,
          zipPostalCode,
          country,
          id,
          image
        },
      }}
      ><img className="map__events-image" src={image} /></Link> */}
      <a href={'javascript:getEventDetailsFromDB("' + eventName + '")'}><img className="map__events-image" src={image} /></a>
    </div>
    <div className="map__events-text">
      {/* <h2><Link
        to={{ pathname:
        '/events/' + eventName,
        query: {
          eventName,
          description,
          eventStartDateTime,
          eventEndDateTime,
          eventContractAddress,
          price,
          addressLine1,
          addressLine2,
          city,
          state,
          zipPostalCode,
          country,
          id,
          image
        },
      }}
      >{eventName}</Link></h2> */}
      <a href={'javascript:getEventDetailsFromDB("' + eventName + '")'}>{eventName}</a>
      <p>Date: {Moment(eventStartDateTime).format('MMM Do YYYY, h:mm A')}</p>
      <p>Price: {price / 1000000000000000000} ETH</p>
      <p>City: {city + ', ' + state}</p>
    </div>
  </div>
);

export default MapEvent;
