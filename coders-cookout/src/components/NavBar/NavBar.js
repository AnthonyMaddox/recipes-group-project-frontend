import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

class NavBar extends Component {
  render () {

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/home" className="navbar-brand">Coders Cookout</Link>
        <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/signup" className="nav-link">Sign Up</Link>
                <Link to="/login" className="nav-link">Log in</Link>
                <Link to="/logout" className="nav-link">Log Out</Link>
                </li>            
            </ul>
        </div>
    </nav>
    )
  }
}

export default NavBar




