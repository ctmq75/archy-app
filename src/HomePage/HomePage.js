import React, { Component } from "react";
import MapContainer from '../MapContainer/MapContainer.js'

export class HomePage extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h3>Self-Guided Architechtural Tour of Chicago</h3>

            <a href={"/createroute"}>
              <p>Create a new route!</p>
            </a>
            <a href={"/SiteRef"}>
              <p>Site Reference Page</p>
            </a>
          </nav>
        </header>
        <section>
          <MapContainer />
        </section>
      </div>
    );
  }
}

export default HomePage;
