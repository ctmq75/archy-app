import React, { Component } from "react";
import MapContainer from '../MapContainer/MapContainer.js'


export class SiteRef extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h3>Reference Page</h3>
            <a href={"/CreateRoute"}><p>Create a new route!</p></a>

          </nav>
        </header>
        <h1>Chicago's Most Notable Artchitechtural Sites</h1>
        <p>Click each site marker on map for photo and description!</p>
        <section>
          <MapContainer />
        </section>

      </div>
    );
  }
}

export default SiteRef;
