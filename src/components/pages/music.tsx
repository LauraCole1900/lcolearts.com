import { ReactElement } from "react";
import { Col, Container, Row, Image } from "react-bootstrap";
import { Chorale } from "../../pix";
import "./style.css";


const Musician = (): ReactElement => {


  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <Row>
            <h1>Musician</h1>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <div className="float-right">
            <Image fluid src={Chorale} alt="Laura Cole" className="choralepic" />
            <p className="caption">Picture by Susan McKenzie, used by permission</p>
          </div>
          <Row>
            <h2>Mezzo-Soprano</h2>
          </Row>
          <Row>
            <h3>Bachelor of Music Education, emphasis in Voice, <a href="http://www.unco.edu" rel="noreferrer noopener" target="_blank">University of Northern Colorado</a>, 12/2000</h3>
          </Row>
          <Row>
            <ul>
              <li>Member, Concert Choir, 1998-2000</li>
              <li>Member, Women's Glee Club, 1997-2000</li>
            </ul>
          </Row>
          <Row>
            <h3>Music teacher, Milliken Elementary School, 8/2001-6/2019</h3>
          </Row>
          <Row>
            <ul>
              <li>Chose, taught and led grade-level programs every year</li>
              <li>Created and led the choir program, 2002-2018</li>
            </ul>
          </Row>
          <Row>
            <h3>Member, <a href="http://www.greeleychorale.org" rel="noreferrer noopener" target="_blank">Greeley Chorale</a>, 2019-present</h3>
          </Row>
          <Row>
            <ul>
              <li>Soloist on October 5, 2019 concert</li>
              <li>Soloist for the Duruflé Requiem, April 9, 2022</li>
              <li>Guest Conductor for "No Time" by Susan Brumfield, October 8, 2022</li>
            </ul>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1}}>
          <h4>You can find my musical compositions <a href="https://lcolearts.herokuapp.com/music" aria-labelledby="My Compositions">here</a>.</h4>
        </Col>
      </Row>
    </Container>
  )
}

export default Musician;