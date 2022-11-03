import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";


const NotFound = (): ReactElement => {


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
              <Button data-toggle="popover" title="Musician" className="button">Music CV</Button>
            </Link>
            <a href="https://lcolearts.herokuapp.com/music" rel="noreferrer noopener">
              <Button data-toggle="popover" title="Musical Compositions" className="button">Compositions</Button>
            </a>
            <Link to="/martial_artist">
              <Button data-toggle="popover" title="Martial Artist" className="button">Martial Artist</Button>
            </Link>
            <a href="https://lcolearts.herokuapp.com/blog" rel="noreferrer noopener">
              <Button data-toggle="popover" title="Blog" className="button">Blog</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default NotFound;