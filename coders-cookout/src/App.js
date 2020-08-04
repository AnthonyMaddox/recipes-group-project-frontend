import React from 'react';
import { BrowserRouter as Router,Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Home from "./components/Home"

function App() {
  return (
    <Router>
      <div>
      <nav>
        <Link to="/"></Link>
      </nav>
      <main>
        <Route path="/" component={Home}/>
      </main>
    </div>
    </Router>
    
  )
}

export default App;
