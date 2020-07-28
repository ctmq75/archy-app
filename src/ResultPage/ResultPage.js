import React, { Component } from "react";
import { Link } from 'react-router-dom'


export class ResultPage extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h3>ROUTE RESULT</h3>
            <Link to={"/SavedRoutes"}><p>Saved Collection</p></Link>
            <Link to={"/CreateRoute"}><p>Create a new route!</p></Link>
            <Link to={"/SiteRef"}><p>Site Reference Page</p></Link>

          </nav>
        </header>
        <section>**Route picture**</section>

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
    );
  }
}

export default ResultPage;
