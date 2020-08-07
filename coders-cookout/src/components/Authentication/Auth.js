import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import SignUpForm from "../SignUpForm/SignUpForm";
import LogInForm from "../LogInForm/LogInForm";
import LogOut from "../LogOut/LogOut";
import "./Auth.css";

class Auth extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/signup", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch((err) => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch((err) => console.log(err));
  }

<<<<<<< HEAD
  render () {
    console.log("This is from AUth")
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div  className='body'>
          <Switch>
            <Route exact path='/signup'
=======
  render() {
    return (
      <div>
        <NavBar isLoggedIn={this.state.isLoggedIn} />
        <div className="body">
          <Switch>
            <Route
              path="/signup"
>>>>>>> e9a32550e4c167867940300d6fc1f7d113f37362
              render={(props) => {
                return (
                  <SignUpForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleSignUp={this.handleSignUp}
                  />
                );
              }}
            />
            <Route
              path="/logout"
              render={(props) => {
                return (
                  <LogOut
                    isLoggedIn={this.state.isLoggedIn}
                    handleLogOut={this.handleLogOut}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                return (
                  <LogInForm
                    isLoggedIn={this.state.isLoggedIn}
                    handleInput={this.handleInput}
                    handleLogIn={this.handleLogIn}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Auth;
