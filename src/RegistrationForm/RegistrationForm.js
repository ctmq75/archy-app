import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import AuthApiService from "../services/auth-api-service";
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  };

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { full_name, nickname, user_name, password } = ev.target;

    this.setState({ error: null });
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
      nickname: nickname.value,
    })
      .then(user => {
        full_name.value = ''
        nickname.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div id='reg-form'>
      <form className="RegistrationForm" onSubmit={this.handleSubmit}>
        <div className="full_name">
          <label htmlFor="RegistrationForm__full_name">
            Full name <Required />
          </label><br />
          <Input
            name="full_name"
            type="text"
            required
            id="RegistrationForm__full_name"
          ></Input>
        </div>
        <div className="user_name">
          <label htmlFor="RegistrationForm__user_name">
            User name <Required />
          </label><br />
          <Input
            name="user_name"
            type="text"
            required
            id="RegistrationForm__user_name"
          ></Input>
        </div>
        <div className="password">
          <label htmlFor="RegistrationForm__password">
            Password <Required />
          </label><br />
          <Input
            name="password"
            type="password"
            required
            id="RegistrationForm__password"
          ></Input>
        </div>
        <div className="nickname">
          <label htmlFor="RegistrationForm__nickname">Nickname</label><br />
          <Input
            name="nickname"
            type="text"
            required
            id="RegistrationForm__nickname"
          ></Input>
        </div>
          <Button type="submit">Register</Button>
        
      </form>
      </div>
    );
  }
}
