import React, { Component } from 'react'


import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

import './SignUpForm.css'
import LogInForm from '../LogInForm/LogInForm';

class SignUpForm extends Component {
  render () {
    console.log("Hello from Sign Up")
    return (
      <div>
        <h2>Sign Up</h2>
        <div>
          <Route path="/login" component={LogInForm} />
          </div>
        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
          <p>Already a member? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
  }
}

export default SignUpForm