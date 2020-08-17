import React, { Component } from "react";
import './Directions.css'


import store from "../store.js";
import Map from '../Map/Map.js'

const STORE = store;



export default class Directions extends Component {
  constructor() {
    super();
    this.state = {
      selected: true,
      value: {},
    };

    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleChange(e) {
    var options = e.target.options;
    var value = [];
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value)

      }
    }
    const passdown = value.map(item => {
      return {location: item, stopover: true}
    })
    await this.setState({ value: passdown });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div id="dir-form">
            <select multiple size="15">
              {STORE.buildings.map((bldng) => (
                <option key={bldng.id} value={bldng.location} >
                  {bldng.name}
                </option>
              ))}
              ;
            </select>
          </div>
          <br />
          <div>


            <button type="reset">Reset</button>
          </div>
          <br />
        </form>
        <section id='mapsection'>
                <Map value={this.state.value} />
        </section>
        <section>

        </section>
      </div>
    );
    
  }
}
