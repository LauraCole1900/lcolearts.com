import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
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
          <NavDropdown title="Musician">
            <NavDropdown.Item href="/musician" className="navlink">C.V.</NavDropdown.Item>
            <NavDropdown.Item href="https://lcolearts.herokuapp.com/music/page/1" className="navlink" rel="noreferred noopener">Compositions</NavDropdown.Item>
          </NavDropdown>
          <Link to="/martial_artist" className="navlink">
            Martial Artist
          </Link>
          <a href="https://lcolearts.herokuapp.com/blog/page/1" className="navlink" rel="noreferrer noopener">
            Blog
          </a>
          <Link to="/fun_and_games" className="navlink">
            Fun & Games
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default Navigation;