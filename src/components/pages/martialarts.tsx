import { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./style.css";


const MartialArtist = (): ReactElement => {


  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <h1>Martial Artist</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <h3><a href="https://www.skski.net/" rel="noreferrer noopener" target="_blank">Kosho Ryu Kempo</a></h3>
          <ul>
            <li>Years: 2014-present</li>
            <li>Current instructor: Jon Ludwig Shihan</li>
            <li>Highest rank attained: Nikyu/Brown 2</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <h3>Shotokan</h3>
          <ul>
            <li>Years: 2018-present</li>
            <li>Current instructors: Morgan Mayfield Sensei and River Mayfield Sensei</li>
            <li>Highest rank attained: Shodan</li>
            <li>Currently working as assistant instructor at Warrior's Way Karate Greeley</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <h3><a href="http://www.koryu-uchinadi.com/" rel="noreferrer noopener" target="_blank">Koryu Uchinadi</a></h3>
          <ul>
            <li>Years: 2018-present</li>
            <li>Current instructors: Patrick McCarthy Hanshi and T. Erik Angerhofer Shidoin</li>
            <li>Highest rank attained: ? - mudansha</li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}

export default MartialArtist