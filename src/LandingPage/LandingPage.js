import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import MapContainer from '../MapContainer/MapContainer.js'


export class LandingPage extends Component {
    render() {
        return (
    <div className="App">
      <header>
      <nav>
        <h3>Self-Guided Architechtural Tour of Chicago</h3>
        
        <a href={"/LoginPage"}><p>LOGIN</p></a>
        <a href={"/RegistrationPage"}><p>Register!</p></a>
        <a href={"/SiteRef"}><p>Site Reference Page</p></a>

          
        </nav>
      </header>
      <section>
        <p><u>Demo Credentials</u>
        <br />
        Username: "user" <br /> Password: "Password1!"
        </p>
        <MapContainer />
      </section>

    </div>

        )
    }
}

export default LandingPage


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