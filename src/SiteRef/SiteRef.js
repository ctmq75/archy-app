import React, { Component } from "react";
import { Link } from 'react-router-dom'


export class SiteRef extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h3>Reference Page</h3>
            <Link to={"/SavedRoutes"}><p>Saved Collection</p></Link>
            <Link to={"/CreateRoute"}><p>Create a new route!</p></Link>

          </nav>
        </header>
        <h1>Chicago's Most Notable Artchitechtural Sites!</h1>
        <p>(each site will have at least a photo and description)</p>
        <section>The Wrigley Building</section>

        <section>Merchandice Mart</section>

        <section>Marina City Towers</section>

        <section>The Rookery Building</section>

        <section>Aqua Tower</section>
        <section>example building</section>
        <section>example building</section>
      </div>
    );
  }
}

export default SiteRef;
