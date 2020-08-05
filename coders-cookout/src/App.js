import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { NaviBar } from "./components/NaviBar";
import RecipeOfDay from "./components/RecipeOfDay";

function App() {
  return (
    <Router>
      <div>
        <NaviBar />
        <nav>
          <Link to="/"></Link>
        </nav>
        <main>
          <Route path="/" component={Home} />
        </main>
        <RecipeOfDay />
      </div>
    </Router>
  );
}

export default App;
