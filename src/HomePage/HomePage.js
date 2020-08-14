import React, { Component } from "react";
import MapContainer from '../MapContainer/MapContainer.js'
import './HomePage.css'

export class HomePage extends Component {
  render() {
    return (
      <div id='container'>
        <header id='homehead'>
        <h3>Self-Guided Architechtural Tour of Chicago</h3>

          <nav id='homenav'>
            
            <a className='homelinks' href={"/createroute"}>
              <p>Create a new route!</p>
            </a>
            <a className='homelinks' href={"/SiteRef"}>
              <p>Site Reference Page</p>
            </a>
          </nav>
        </header>
        <section className='parallax homeinfo'>
        <div className='parallax-inner'>
        <h4>Plan a tour in one of the most architechturally diverse cities in the world~</h4>
        </div>
        </section>
    

        <section className='margin homeinfo'>
            <p className='homeinfo'>The buildings and architecture of Chicago have influenced and reflected the history of American architecture. The built environment of Chicago is reflective of the city's history and multicultural heritage, featuring prominent buildings in a variety of styles by many important architects. Since most structures within the downtown area were destroyed by the Great Chicago Fire in 1871 (the most famous exception being the Water Tower)[1] Chicago buildings are noted for their originality rather than their antiquity.
Chicago is world-famous for its plethora of unique architectural styles, from Chicago Bungalows and Two-Flats to the grand Graystones along Logan Boulevard and Lawndale Avenue, from the skyscrapers of the Loop as well as a wealth of sacred architecture such as the city's ornate "Polish Cathedrals".</p>
        </section>

        <section className='parallax homeinfo'>
            <div className='parallax-inner'>
          <h4>Instructions:</h4>
          <ul>
              <li>1. Click "Site Reference Page" link in the top-right corner of the page to open a new tab with an interactive map of notable architechtural sites to choose from.</li>
              <li>2. Click on "Create a new route!" link in the top-right corner of the page to start a new route.</li>
              <li>3. Add sites to your custom route!</li>

          </ul>
          </div>
        </section>
        <div className='margin'></div>
      </div>
    );
  }
}

export default HomePage;
