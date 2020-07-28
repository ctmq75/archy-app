import React, { Component } from "react";
import { Link } from 'react-router-dom'


export class CreateRoute extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h3>CREATE NEW ROUTE</h3>
            <Link to={"/SavedRoutes"}><p>Saved Collection</p></Link>
            <Link to={"/CreateRoute"}><p>Create a new route!</p></Link>
          </nav>
        </header>
        <section>
          <form id="record-dream">
            <div className="form-section">
              <label htmlFor="dream-title">Route Name</label>
              <input
                type="text"
                name="dream-title"
                placeholder="route 1"
                required
              />
            </div>
            <div className="form-section">
              <label htmlFor="dream-summary">
                List of Notable Architectural buildings
              </label>
              <p>
                <strong>
                  Select "Site" from list to add to your route. You may
                  control-click (Windows) or command-click (Mac) to select more
                  than one.
                </strong>
              </p>
              <br />
              <p>
                *the list below will be much bigger and may include picture of
                building and/or brief description in addition to the separate
                page with more details*
              </p>
              <select multiple size="6">
                <option value="American">The Wrigley Building</option>
                <option value="Andean">Merchandice Mart</option>
                <option value="Chilean">Marina City Towers</option>
                <option value="Greater">The Rookery Building</option>
                <option value="James's">Chicago Cultural Center</option>
                <option value="Lesser">Aqua Tower</option>
              </select>
            </div>

            <Link to={"/ResultPage"}><button type="submit">Submit</button></Link>
            <button type="reset">Reset</button>
          </form>
        </section>
      </div>
    );
  }
}

export default CreateRoute;
