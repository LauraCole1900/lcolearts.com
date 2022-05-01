import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./style.css";


const Navigation = (): ReactElement => {


  return (
    <Navbar expand="sm" className="navbar">
      <Navbar.Brand>
        <Link to="/about" className="mylogo">
          Laura Cole
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Link to="/" className="navlink">
            Home
          </Link>
          <Link to="/about" className="navlink">
            About
          </Link>
          <Link to="/webdev" className="navlink">
            Webdev
          </Link>
          <Link to="/musician" className="navlink">
            Musician
          </Link>
          <Link to="/martial_artist" className="navlink">
            Martial Artist
          </Link>
          <a href="https://lcolearts-blog.herokuapp.com/" className="navlink" rel="noreferrer noopener">
            Blog
          </a>
          <Link to="/contact" className="navlink">
            Contact Me
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;