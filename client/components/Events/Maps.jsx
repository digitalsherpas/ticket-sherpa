import React from 'react';
import ReactDOM from 'react-dom';
import Map, {GoogleApiWrapper} from 'google-maps-react';
import keys from '../../../keys.js';
// import Marker from 'google-maps-react/dist/components/Marker.js';
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
      markers: [],
      register: false,
      loggedIn: false,
      username: ''
    };
    // this.onMarkerClick = this.onMarkerClick.bind(this);
    // this.onInfoWindowClose = this.onInfoWindowClose.bind(this);
    // this.setMarkers = this.setMarkers.bind(this);
    // this.onMapClicked = this.onMapClicked.bind(this);
    // this.LogInUser = this.LogInUser.bind(this);
    // this.LogOutUser = this.LogOutUser.bind(this);
  }

  // open info window and set state for selected map marker
  // onMarkerClick(props, marker, e) {
  //   this.setState({
  //     selectedPlace: props,
  //     activeMarker: marker,
  //     showingInfoWindow: true
  //   });
  // }
  //
  // // close info window for selected map marker
  // onInfoWindowClose() {
  //   this.setState({
  //     showingInfoWindow: false,
  //     activeMarker: null
  //   });
  // }
  //
  // // closes open info window if map is clicked on
  // onMapClicked(props) {
  //   if (this.state.showingInfoWindow) {
  //     this.setState({
  //       showingInfoWindow: false,
  //       activeMarker: null
  //     });
  //   }
  // }
  //
  // // set state of current array of markers
  // setMarkers(markerArray) {
  //   this.setState({
  //     markers: markerArray
  //   });
  // }
  //
  // LogInUser(username) {
  //   this.setState({username: username});
  //   this.setState({loggedIn: true});
  // }
  //
  // LogOutUser() {
  //   this.setState({loggedIn: false});
  //   this.setState({username: ''});
  // }

  render() {
    // puts the current state of map markers into an array that can be rendered
    // const Markers =
    //     this.state.markers
    //     .map((marker, index) => (
    //       <Marker
    //         key={index}
    //         onClick={this.onMarkerClick}
    //         company={marker['company']}
    //         jobtitle={marker['jobtitle']}
    //         snippet={marker['snippet']}
    //         url={marker['url']}
    //         jobkey={marker['jobkey']}
    //         position={{lat: marker['lat'], lng: marker['lng']}} />
    //     ));

    // if user is logged in, side bar changes to logged in view
    // The UserSideBar file includes all components which are rendered to non-logged in user
    // The UserHome folder includes the components that are rendered to only logged in users
    // let sideBar;
    // if (this.state.loggedIn) {
    //   sideBar = <UserHome selected={this.state.selectedPlace} username={this.state.username} LogOutUser={this.LogOutUser}/>;
    // } else {
    //   sideBar = <UserSideBar LogInUser={this.LogInUser}/>;
    // }

    return (
      <div className='application'>
        {/* SearchBar will pass data to setMarkers */}
        {/* <SearchBar setMarkers={this.setMarkers}/> */}
        <div className='overallContainer'>
          {/* sideBar contains signin/register and logged in components*/}
          {/* {sideBar} */}
          <div className='mapContainer'>
        {/* Google Maps component */}
          <Map google={window.google}
              style={{width: '50%', height: '50%', position: 'relative'}}
              className={'map'}
            //   zoom={14}
            //   onClick={this.onMapClicked}
            //   onDragend={this.onMapMoved}>
            //
            // {/* array of current markers imported to map */}
            // {Markers}
            //
            // {/* InfoWindow on marker click*/}
            // <InfoWindow
            //   marker={this.state.activeMarker}
            //   visible={this.state.showingInfoWindow}
            //   onClose={this.onInfoWindowClose}>
            //     <div className='infowindow'>
            //       <h3>{this.state.selectedPlace.company}</h3>
            //       <h4>{this.state.selectedPlace.jobtitle}</h4>
            //       <p>{this.state.selectedPlace.snippet}</p>
            //       <div><a href={this.state.selectedPlace.url}>Click to View</a></div>
            //   </div>
            // </InfoWindow>
          />
          </div>
        </div>
      </div>
    );
  }
}

// this imports the use of google maps api
// the Container component is wrapped with it
// this allows the use of google maps api functions
export default GoogleApiWrapper({
  apiKey: keys.GOOGLE_MAPS_API_KEY,
})(Container);
