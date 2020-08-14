import React, { Component } from "react";
import Map from '../Map/Map.js'
import {MyContext} from '../MyContext/MyContext.js'


export class ResultPage extends Component {
  render() {
    return (
      <MyContext.Provider>
      <div>
        <header>
          <nav>
            <h3>ROUTE RESULT</h3>
            <a href={"/SavedRoutes"}><p>Saved Collection</p></a>
            <a href={"/CreateRoute"}><p>Create a new route!</p></a>
            <a href={"/SiteRef"}><p>Site Reference Page</p></a>

          </nav>
        </header>
        <section>*Map</section>
        <MyContext.Provider
            value={this.props.value}>
      <Map value={this.props.value}/>
      </MyContext.Provider>
        <section>
          <ul>
            <li>Driving </li>
            <li>Directions</li>
            <li>Listed</li>
            <li>Here</li>
          </ul>
        </section>

        <section>
          <button>Delete Route</button>
          <button>Share with Friends!</button>
        </section>
      </div>
      </MyContext.Provider>
    );
  }
}

export default ResultPage;
