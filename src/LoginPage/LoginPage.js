import React, { Component } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Section } from "../Utils/Utils.js";
import "./LoginPage.css";

export default class LoginPage extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  };

  handleLoginSuccess = () => {
    const { location, history } = this.props;
    const destination = (location.state || {}).from || "/Homepage";
    history.push(destination);
  };

  render() {
    return (
      <div className="LoginPage">
        <header id="homehead">
        <a className="homelinks" href={"/"}><h3>Self-Guided Architechtural Tour of Chicago</h3></a>

          <nav id="homenav">
            <a className="homelinks" href={"/SiteRef"}>
              <p>List of Sites</p>
            </a>
          </nav>
        </header>
        <Section>
          <h2 id="loginhead">Login</h2>
          <section>
            <p>
              Username: 'user' <br />
              Password: 'Password1!'
            </p>
          </section>
          <br />
          <LoginForm onLoginSuccess={this.handleLoginSuccess} />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
      </div>
    );
  }
}
