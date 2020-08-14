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
      <Section className="LoginPage">
        <h2 id='loginhead'>Login</h2>
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
    );
  }
}
