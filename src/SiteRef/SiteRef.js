import React, { Component } from "react";
import MapContainer from "../MapContainer/MapContainer.js";
import "./SiteRef.css";

export class SiteRef extends Component {
  render() {
    return (
      <div id='site-ref'>
        <header id='homehead'>
        <a className="homelinks" href={"/"}><h3>Self-Guided Architechtural Tour of Chicago</h3></a>
          <nav id='homenav'>
            <a className='homelinks' href={"/createroute"}>
              <p>Create a new route!</p>
            </a>
            <a className='homelinks' href={"/SiteRef"}>
              <p>List of Sites</p>
            </a>
          </nav>
        </header>
        <section>
          <h1 className='info'>Chicago's Most Notable Artchitechtural Sites</h1>
          <p className='info'>Click each site marker on map for photo and description!</p>
          <div id='map-bg'>
            <MapContainer />
          </div>
        </section>
      </div>
    );
  }
}

export default SiteRef;
