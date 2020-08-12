import React, { Component } from "react";
import { Link } from 'react-router-dom'


export class SavedRoutes extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <h3>SAVED ROUTES COLLECTION</h3>
            <a href={"/homepage"}>
              <p>Home</p>
            </a>
            <a href={"/CreateRoute"}><p>Create a new route!</p></a>
            <a href={"/SiteRef"}><p>Site Reference Page</p></a>
          </nav>
        </header>
        <section>
        <header>
            <h2>Route 1</h2>
            <p>01.28.2017</p>
        </header>
        <blockquote>*photo of route*</blockquote>

        <button>Edit</button>
        <button>Delete</button>
      </section>
      <section>
        <header>
            <h2>Route 2</h2>
            <p>01.27.2017</p>
         <blockquote>*photo of route*</blockquote>

        <button>Edit</button>
        <button>Delete</button>
        </header>
      </section>
      <section>
        <header>
            <h2>Route 3</h2>
            <p>01.26.2017</p>
          <blockquote>*photo of route*</blockquote>

        <button>Edit</button>
        <button>Delete</button>
        </header>
      </section>
      </div>
    );
  }
}

export default SavedRoutes;
