import React, { Component } from "react";
import { Section } from "../Utils/Utils";
import "./RegistrationPage.css";
import RegistrationForm from "../RegistrationForm/RegistrationForm.js";

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push("/LoginPage");
  };

  render() {
    return (
      <div id="reg-page">
        <header id="homehead">
          <a className="homelinks" href={"/"}>
            <h3>Self-Guided Architechtural Tour of Chicago</h3>
          </a>

          <nav id="homenav">
            <a className="homelinks" href={"/createroute"}>
              <p>Create a new route!</p>
            </a>
            <a className="homelinks" href={"/SiteRef"}>
              <p>List of Sites</p>
            </a>
          </nav>
        </header>
        <Section className="RegistrationPage">
          <h2>Register</h2>
          <RegistrationForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </Section>
      </div>
    );
  }
}
