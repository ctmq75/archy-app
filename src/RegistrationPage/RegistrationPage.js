import React, { Component } from 'react'
import { Section } from '../Utils/Utils'
import RegistrationForm from '../RegistrationForm/RegistrationForm.js'

export default class RegistrationPage extends Component {
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
      <Section className='RegistrationPage'>
        <h2>Register</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </Section>
    )
  }
}