import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Directions from '../Directions/Directions.js'
import './CreateRoute.css'


export class CreateRoute extends Component {


  render() {

    return (
      <div id='createcontainer'>
        <header id='createhead'>
        <h3>CREATE NEW ROUTE</h3>
          <nav>
            <a className='links3' href={"/homepage"}>
              <p>Home</p>
            </a>
            <a className='links3' href={"/CreateRoute"}>
              <p>Create a new route!</p>
            </a>
            <a className='links3' href={"/SiteRef"}>
              <p>Site Reference Page</p>
            </a>
          </nav>
        </header>

        <section>
          <form id="create-route">

            <div className="form-section">
              <p id='instruct'>
                <strong>
                  Select "Site" from list to add to your route. You may
                  control-click (Windows) or command-click (Mac) to select more
                  than one.
                </strong>
                <br />
                <br />
                Note: All routes start at Chicago's Navy Pier and end at Tribune Tower. Sites selected from the list will be added as stops on the route. Select up to 10 sites and we will give you the shortest optimized route!
              </p>
              <br />

              <div id='dir-form'>

              </div>
            </div>


          </form>
          <div id='mapdiv'>
            <Directions />
          </div>
        </section>
        <br />
        <br />

      </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: "AIzaSyAbs_-rCldIrwqDWH_cu-I8uXKfJPdxjPc",
})(CreateRoute);

