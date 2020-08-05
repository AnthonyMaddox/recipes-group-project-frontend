import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { NaviBar } from "./components/NaviBar";
import FormPage from "./components/FormPage";

function App() {
  return (
    <Router>
      <div>
        <NaviBar />
        <nav>
          <Link to="/"></Link>
          <Link className="formLink" to="/formpage">
            To Form Page
          </Link>
        </nav>
        <main>
          <Route path="/" component={Home} />
          <Route path="/formPage" component={FormPage} exact={true} />
        </main>
      </div>
    </Router>
  );
}

export default App;
