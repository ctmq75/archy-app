import React, { Component } from "react";
import { GoogleApiWrapper } from "google-maps-react";
import Directions from '../Directions/Directions.js'


export class CreateRoute extends Component {


  render() {

    return (
      <div>
        <header>
          <nav>
            <h3>CREATE NEW ROUTE</h3>
            <a href={"/homepage"}>
              <p>Home</p>
            </a>
            <a href={"/CreateRoute"}>
              <p>Create a new route!</p>
            </a>
            <a href={"/SiteRef"}>
              <p>Site Reference Page</p>
            </a>
          </nav>
        </header>

        <section>
          <form id="create-route">

            <div className="form-section">
              <p>
                <strong>
                  Select "Site" from list to add to your route. You may
                  control-click (Windows) or command-click (Mac) to select more
                  than one.
                </strong>
                <br />
                <br />
                Note: *for now* All routes start at Chicago's Navy Pier and end at Tribune Tower. Sites selected from the list will be added as stops on the route. Select up to 10 sites and we will give you the shortest optimized route!
              </p>
              <br />

              <div id='dir-form'>

              </div>
            </div>


          </form>
          <section>
            <Directions />
          </section>
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

/*

handleSubmit(e) {
  e.preventDefault();
  console.log("submit handled!");

  const baseUrl =
    "https://maps.googleapis.com/maps/api/directions/json?";

  let searchEntry = `${this.state.searchEntry}`;

  const queryString = `${baseUrl}?q=${searchEntry}&${filter}&${printType}`;
  fetch(queryString)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then(responseJSon => {
      console.log(responseJSon);
      this.setState({
        searchResults: responseJSon.items
      });
    })
    .catch(e => {
      console.log(e);
      this.setState({ error: e.message });
    });
}





                <option value="James's">Chicago Cultural Center</option>
                <option value="American">The Wrigley Building</option>
                <option value="Andean">Merchandise Mart</option>
                <option value="Chilean">Marina City Towers</option>
                <option value="Greater">The Rookery Building</option>
                <option value="Lesser">Aqua Tower</option>
*/
