import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Search from "../components/Search/Search";

const Styles = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Orbitron:wght@600&display=swap");
  .navbar {
    background-color: #e27878;
    height: 5em;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    text-decoration: none;
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 2.5em;
    color: white;
    position: absolute;
    font-family: "Orbitron", sans-serif;
    margin: 0.3em 0em 0em 1.2em;
  }
  input {
    height: 2.3em;
    width: 20em;
    margin-top: 0.7em;
  }
  Nav.Link {
    background-color: white;
  }
`;

export const NaviBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Coder Cook-Off</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto"></Nav>
        <Nav.Item>
          <Nav.Link>
            <Link to="/home">Home</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/search">Search</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/formsPage">Create Recipe</Link>
          </Nav.Link>
        </Nav.Item>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
