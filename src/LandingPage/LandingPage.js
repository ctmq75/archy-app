import React, { Component } from "react";
import "./LandingPage.css";
import MapContainer from "../MapContainer/MapContainer.js";
import RegistrationForm from "../RegistrationForm/RegistrationForm"

export class LandingPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }
  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/LoginPage')
  }
  render() {
    return (
      <div className="App" id='landpage'>
        <header id="header">
        <a className="homelinks" href={"/"}><h3>Self-Guided Architechtural Tour of Chicago</h3></a>

          <nav>
            <a className="links" href={"/LoginPage"}>
              <p>Login</p>
            </a>
            <a className="links" href={"/"}>
              <p>Register!</p>
            </a>
            <a className="links" href={"/SiteRef"}>
              <p>List of Sites</p>
            </a>
          </nav>
        </header>
        <section>
          <h3>Register to get Started!</h3>
          <RegistrationForm 
          onRegistrationSuccess={this.handleRegistrationSuccess} 
          />
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default LandingPage;

/*
<form className='signup-form'>
<div>
  <label htmlFor="first-name">First name</label>
  <input placeholder='First Name' type="text" name='first-name' id='first-name' />
</div>
<div>
  <label htmlFor="last-name">Last name</label>
  <input type="text" name='last-name' id='last-name' placeholder='Last Name' />
</div>
<div>
  <label htmlFor="username">Email</label>
  <input type="text" name='username' id='username' />
</div>
<div>
  <label htmlFor="password">Password</label>
  <input type="password" name='password' id='password' />
</div>
<button type='submit'>Sign Up</button>
</form>
*/
