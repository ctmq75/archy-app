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
    console.log(passdown)
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
        </form>
        <section id='screenshot'>
                <Map value={this.state.value} />
        </section>
        <section>

        </section>
      </div>
    );
    
  }
}






/*

{bldng.coordinates.lat + '/' + bldng.coordinates.lng}
{'lat: ' + bldng.coordinates.lat + ', lng: ' +bldng.coordinates.lng}



import React, { Component, useContext, setContext } from "react";
import { Link } from "react-router-dom";

import store from "../store.js";
import Map from '../Map/Map.js'
import {MyContext} from '../MyContext/MyContext.js'

const STORE = store;




        <ScreenCapture onEndCapture={this.handleScreenCapture}>
        {({ onStartCapture }) => (
          <>
                      <header>
              <Navbar capture={onStartCapture} />
            </header>
            <Popup open={this.state.open} modal closeOnDocumentClick>
              <div className="modal">
                <div className="modal__header">
                  <button onClick={this.closeModal}>&times;</button>
                </div>
                <div className="modal__body">
                  <div>
                    <label>Title</label>
                    <input
                      type="text"
                      onChange={this.handleOnChange}
                      name="title"
                      value={this.state.title}
                    />
                  </div>
                  <div className="image__container">
                    {screenCapture && (
                      <img src={screenCapture} alt="screen capture" />
                    )}
                  </div>
                </div>
                <div className="modal__footer">
                  <button onClick={this.handleSave}>Save</button>
                  <button onClick={this.closeModal}>Cancel</button>
                </div>
                {{screenCapture && <img src={screenCapture} alt="screen capture" />} }
                </div>
                </Popup>
              </>
            )}
          </ScreenCapture>




            handleScreenCapture = screenCapture => {
    this.setState(
      {
        screenCapture
      },
      () => {
        screenCapture && this.openModal();
      }
    );
  };

  openModal = () => {
    this.setState({ open: true });
  };

  closeModal = () => {
    this.setState({ open: false, screenCapture: '' });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSave = () => {
    console.log(this.state.title, this.state.screenCapture);
  };


        screenCapture: '',
      open: false,
      title: "gimmeatitle"

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

  // extract the value to setState the DOM
  async handleChange(e) {
    var options = e.target.options;
    var value = [];
    console.log(value);
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    await this.setState({ value: value });
    
    console.log(this.state)

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
                <option key={bldng.id} value={[bldng.lat + ', ' + bldng.lng]}>
                  {bldng.name}
                </option>
              ))}
              ;
            </select>
          </div>
          <br />
          <div>
              <button type="submit" onSubmit={this.handleSubmit} >Submit</button>

            <button type="reset">Reset</button>
          </div>
        </form>
      </div>
    );
    
  }
}

Directions.contextType = MyContext;


*/