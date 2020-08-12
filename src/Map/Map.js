import React, { Component } from "react";

import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
const google = window.google;


//  cords = ["41.89877 /-87.622917", "41.9474536 /-87.65613410000003"]

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};


  }

  handleClick(e) {
    e.preventDefault();
    
  }
  
 
  render(props) {

    const waypoints = this.props.value;
    console.log(waypoints)
    const directionsService = new google.maps.DirectionsService();

    const origin =  {placeId: 'ChIJ2y7xkU0rDogR3KSIsJbbrNA'}
    const destination = { placeId: 'ChIJr7zdAKwsDogRrMIKO4_-HT0'};
    

    directionsService.route(
      {
        origin: origin,
        waypoints: waypoints,
        optimizeWaypoints: true,
        destination: destination,
        travelMode: 'DRIVING',
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result,
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
    const GoogleMapExample = withGoogleMap((props) => (
      <GoogleMap defaultCenter={{ lat: 41.85, lng: -87.6501 }} defaultZoom={13}>
        <DirectionsRenderer directions={this.state.directions} />
      </GoogleMap>
    ));
    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div id='panel'></div>
      </div>
    );
  }
}
export default Map;





/* 
lat: 41.889707, lng: -87.624861

   const origin = { lat: 41.889707, lng: -87.624861}

*/