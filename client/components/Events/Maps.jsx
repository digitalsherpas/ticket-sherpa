import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, browserHistory } from 'react-router';
import axios from 'axios';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import keys from '../../../keys.js';
import Marker from 'google-maps-react/dist/components/Marker.js';
import InfoWindow from 'google-maps-react/dist/components/InfoWindow.js';

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
}

window.getEventDetailsFromDB = (eventName) => {
  axios.get('http://localhost:3000/api/dbEvents?readFromDB=true&eventName=' + eventName).then(({ data }) => {
    browserHistory.push(buildUrl('/events/' + eventName, data));
  })
}


export class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    // puts the current state of map markers into an array that can be rendered
    const Markers =
      this.props.searchEventsList
      .map((marker, index) => (
        <Marker
          key={index}
          position={{lat: marker['latitude'], lng: marker['longitude']}}
          onClick={this.onMarkerClick}
          name={marker['eventName']}
          description={marker['description']}
          eventStartDateTime={marker['eventStartDateTime']}
          eventEndDateTime={marker['eventEndDateTime']}
          eventContractAddress={marker['eventContractAddress']}
          price={marker['price']}
          addressLine1={marker['addressLine1']}
          addressLine2={marker['addressLine2']}
          city={marker['city']}
          state={marker['state']}
          zipPostalCode={marker['zipPostalCode']}
          country={marker['country']}
          id={marker['id']}
        />
      ));
    return (
      <Map google={this.props.google}
        style={{width: '100%', height: '100%', position: 'relative'}}
        className={'events__map'}
        zoom={12}
        >
        {Markers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          >
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
            <a href={'javascript:getEventDetailsFromDB("' + this.state.selectedPlace.name + '")'}>
            {this.state.selectedPlace.name}</a>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.GOOGLE_MAPS_API_KEY,
})(Container);
