import React, { ReactElement } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";

const NotFound = (): ReactElement => {
  const navigate = useNavigate();


  return (
    <>
      <Container>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <h1>404 Not Found</h1>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <p>You've discovered uncharted territory! Return to familiar areas here:</p>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }}>
            <Link to="/">
              <Button data-toggle="popover" title="Home" className="button">Home</Button>
            </Link>
            <Link to="/about">
              <Button data-toggle="popover" title="About" className="button">About</Button>
            </Link>
            <Link to="/webdev">
              <Button data-toggle="popover" title="Webdev Portfolio" className="button">Webdev Portfolio</Button>
            </Link>
            <Link to="/musician">
              <Button data-toggle="popover" title="Musician" className="button">Musician</Button>
            </Link>
            <Link to="/martial_artist">
              <Button data-toggle="popover" title="Martial Artist" className="button">Martial Artist</Button>
            </Link>
            <a href="https://lcolearts-blog.herokuapp.com/" rel="noreferrer noopener">
              <Button data-toggle="popover" title="Blog" className="button">Blog</Button>
            </a>
            <Link to="/contact">
              <Button data-toggle="popover" title="Contact Me" className="button">Contact Me</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound;