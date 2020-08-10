import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./components/Home";
import { NaviBar } from "./components/NaviBar";
import FormPage from "./components/FormPage";
import SearchPage from "./components/SearchPage";
import NavBar from "./components/NavBar/NavBar";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import LogInForm from "./components/LogInForm/LogInForm";
import LogOut from "./components/LogOut/LogOut";

class App extends Component {
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
      .post("https://coders-cookout.herokuapp.com/users/signup", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        alert(response.data.token);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("https://coders-cookout.herokuapp.com/users/login", {
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Router>
        <div>
          <NaviBar />
          <nav>
            <Link to="/home"></Link>
            <Link className="formLink" to="/formpage"></Link>
          </nav>
          <main>
            <Route path="/home" component={Home} />
            <Route path="/formpage" component={FormPage} exact={true} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route path="/search" component={SearchPage} />
            <Switch>
              <Route
                path="/signup"
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
          </main>
        </div>
      </Router>
    );
  }
}

/*
function App() {
  return (
    <Router>
      <div>
        <NaviBar />
        <nav>
          <Link to="/home"></Link>
          <Link className="formLink" to="/formpage">
          </Link>
        </nav>
        <main>
          <Route path="/home" component={Home} />
          <Route path="/formpage" component={FormPage} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} />
          <Route path="/search" component={SearchPage} />
          <Route path="/user" component={User} />
        </main>
      </div>
    </Router>
  );
}
*/

export default App;
