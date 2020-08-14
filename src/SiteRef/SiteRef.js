import React, { Component } from "react";
import MapContainer from "../MapContainer/MapContainer.js";
import "./SiteRef.css";

export class SiteRef extends Component {
  render() {
    return (
      <div>
        <header id="refhead">
          <h3>Reference Page</h3>
          <a className="links4" href={"/homepage"}>
            Home
          </a>
          <br />
          <a className="links4" href={"/CreateRoute"}>
            Create a new route!
          </a>
          <br />
          <br />
        </header>
        <section>
          <h1 className='info'>Chicago's Most Notable Artchitechtural Sites</h1>
          <p className='info'>Click each site marker on map for photo and description!</p>
          <div>
            <MapContainer />
          </div>
        </section>
      </div>
    );
  }
}

export default SiteRef;
