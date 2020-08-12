import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import { InfoWindow, Marker } from "google-maps-react";
import "./MapContainer.css";
import store from "../store.js";
import config from "../config";

const mapStyles = {
  width: "55%",
  height: "55%",
};

const STORE = store;
console.log(STORE);

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {},
  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div className='map-container'>
        <Map
          google={this.props.google}
          zoom={10}
          style={mapStyles}
          initialCenter={{
            lat: 41.899707,
            lng: -87.624861,
          }}
        >
      { 
        store.buildings.map(building =>
            <Marker
              key={building.id}
              title={building.name}
              name={building.name}
              onClick={this.onMarkerClick}
              position={{ lat: building.coordinates.lat, lng: building.coordinates.lng }}
              imgUrl={building.imgUrl}
              description={building.description}
            />
        )
      } 
        <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose} >
          <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <img src={this.state.selectedPlace.imgUrl} alt="pic" />
              <p>{this.state.selectedPlace.description}</p>
          </div>
        </InfoWindow>

        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: `${config.API_KEY}`,
})(MapContainer);



/*

          <Marker
            onClick={this.onMarkerClick}
            name={"Merchandise Mart"}
            position={{ lat: 41.879707, lng: -87.624861 }}
          />
          <Marker
            onClick={this.onMarkerClick}
            name={""}
            position={{ lat: 41.899707, lng: -87.624861 }}
          />

                    <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{"merch mart"}</h4>
              <img src={""} alt={""} />
            </div>
          </InfoWindow>

*/