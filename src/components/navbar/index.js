import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  const location = useLocation();

  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand>
        <Link to="/LauraECole/about" className={location.pathname === "/LauraECole/about" ? "mylogo active" : "mylogo"}>
          Laura Cole
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/LauraECole" className={location.pathname === "/" ? "navlink active" : "navlink"}>
            Home
          </Link>
          <Link to="/LauraECole/about" className={location.pathname === "/LauraECole/about" ? "navlink active" : "navlink"}>
            About
          </Link>
          <Link to="/LauraECole/webdev" className={location.pathname === "/LauraECole/webdev" ? "navlink active" : "navlink"}>
            Webdev
          </Link>
          <Link to="/LauraECole/musician" className={location.pathname === "/LauraECole/musician" ? "navlink active" : "navlink"}>
            Musician
          </Link>
          <Link to="/LauraECole/martial_artist" className={location.pathname === "/LauraECole/martial_artist" ? "navlink active" : "navlink"}>
            Martial Artist
          </Link>
          <Link to="/LauraECole/contact" className={location.pathname === "/LauraECole/contact" ? "navlink active" : "navlink"}>
            Contact Me
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;