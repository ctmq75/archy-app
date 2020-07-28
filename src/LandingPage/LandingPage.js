import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export class LandingPage extends Component {
    render() {
        return (
    <div className="App">
      <header>
      <nav>
        <h3>Self-Guided Architechtural Tour of Chicago</h3>
        
          <Link to={"/SavedRoutes"}><p>Saved Collection</p></Link>
          <Link to={"/CreateRoute"}><p>Create a new route!</p></Link>
          
        </nav>
      </header>
      <section>
        <h3>Sign Up To Get Started:</h3>
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
      </section>
    </div>

        )
    }
}

export default LandingPage
