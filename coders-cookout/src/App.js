import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { NaviBar } from "./components/NaviBar";
import FormPage from "./components/FormPage";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div>
        <NaviBar />
        <nav>
          <Link to="/home"></Link>
          <Link className="formLink" to="/formpage">
            {/* To Form Page */}
          </Link>
        </nav>
        <main>
          <Route path="/home" component={Home} />
          <Route path="/formPage" component={FormPage} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} />

          <Route path="/search" component={SearchPage} />
          {/* <Route path="/forms" component={FormPage} /> */}
        </main>
      </div>
    </Router>
  );
}

export default App;
