import React from 'react';
import ReactDOM from 'react-dom';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import keys from '../../../keys.js';
import Marker from 'google-maps-react/dist/components/Marker.js';
// import InfoWindow from 'google-maps-react/dist/components/InfoWindow.js';
// import SearchBar from './SearchBar/SearchBar.jsx';
// import UserHome from './UserHome/UserHome.jsx';
// import UserSideBar from './UserSideBar/UserSideBar.jsx';

export class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // puts the current state of map markers into an array that can be rendered
    const Markers =
      this.props.searchEventsList
      .map((marker, index) => (
        <Marker
          key={index}
          position={{lat: marker['latitude'], lng: marker['longitude']}} />
      ));

    return (
      <Map google={this.props.google}
        style={{width: '100%', height: '100vh'}}
        className={'events__map'}
        zoom={12}
        // center={{lat: 37.331686, lng: -122.030656}}
        >
        {Markers}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.GOOGLE_MAPS_API_KEY,
})(Container);
