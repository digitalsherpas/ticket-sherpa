import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import keys from '../../../keys.js';
import Marker from 'google-maps-react/dist/components/Marker.js';
import InfoWindow from 'google-maps-react/dist/components/InfoWindow.js';
// import InfoWindow from 'google-maps-react/dist/components/InfoWindow.js';
// import SearchBar from './SearchBar/SearchBar.jsx';
// import UserHome from './UserHome/UserHome.jsx';
// import UserSideBar from './UserSideBar/UserSideBar.jsx';

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

      // ${this.state.selectedPlace.eventContractAddress}&
      // ${this.state.selectedPlace.price}&
      // ${this.state.selectedPlace.id}
      // Leg%20Day%20with%20Andrew?addressLine1=641+O%27Farrell+St&addressLine2=&city=San+Francisco&country=USA&description=Squats+for+days&eventEndDateTime=2016-11-21T18%3A00%3A00.000Z&eventName=Leg+Day+with+Andrew&eventStartDateTime=2016-11-20T18%3A00%3A00.000Z&state=CA&zipPostalCode=94109`

    return (
      <Map google={this.props.google}
        style={{width: '100%', height: '100vh'}}
        className={'events__map'}
        zoom={12}
        // center={{lat: 37.331686, lng: -122.030656}}
        >
        {Markers}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          className="such_awesome_class"
          >
          <div>
            <h2>{this.state.selectedPlace.name}</h2>
            {/* <a href={this.state.selectedPlace.linkUrl}>Link</a> */}
            <Link href={
              `/events/${this.state.selectedPlace.name}?addressLine1=${this.state.selectedPlace.addressLine1}&addressLine2=${this.state.selectedPlace.addressLine2}&city=${this.state.selectedPlace.city}&country=${this.state.selectedPlace.country}&description=${this.state.selectedPlace.description}&eventEndDateTime=${this.state.selectedPlace.eventEndDateTime}&eventName=${this.state.selectedPlace.name}&eventStartDateTime=${this.state.selectedPlace.eventStartDateTime}&state=${this.state.selectedPlace.state}&zipPostalCode=${this.state.selectedPlace.zipPostalCode}`
              }
            >
              Event Details
            </Link>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: keys.GOOGLE_MAPS_API_KEY,
})(Container);

// {/* + 'description=' marker['description'] + 'eventStartDateTime=' + marker['eventStartDateTime'] + 'eventEndDateTime=' + marker['eventEndDateTime']} */}
// {/* + marker['eventContractAddress'] + marker['price'] + marker['addressLine1'] + marker['addressLine2'] + marker['city'] + marker['state'] + marker['zipPostalCode'] + marker['country'] + marker['id']} */}
