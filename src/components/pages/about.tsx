import { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Profile } from "../../pix";
import "./style.css";


const About = (): ReactElement => {


  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <h1>About Me</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <Image fluid src={Profile} alt="Laura Cole" className="mypic float-left" />
          <p className="biotext">I grew up in LaSalle, a small town in northeastern Colorado. After graduating from the <a href="http://www.unco.edu" rel="noreferrer noopener" target="_blank">University of Northern Colorado</a> Lab School in nearby Greeley, I went on to earn my Bachelor of Music Education from the university proper. I then went to work at Milliken Elementary School as the music teacher and stayed there for several years before deciding to pursue web development.</p>

          <p className="biotext">In September of 2020, I started the University of Denver Coding Bootcamp program to certify as a full-stack web developer. I have always enjoyed both helping people and creative endeavors, and web development seems a good way to combine those passions. I have worked in JavaScript/jQuery, Node.js, Express, Express-Handlebars, MySQL/Sequelize, Mongo/Mongoose, ECMAScript6, and React. Examples of my work can be found on my portfolio page and on <a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank">my GitHub page</a>.</p>

          <p className="biotext">In my spare time, I still enjoy making music with the <a href="http://www.greeleychorale.org" rel="noreferrer noopener" target="_blank">Greeley Chorale</a> and training in martial arts. I train in <a href="https://www.skski.net/" rel="noreferrer noopener" target="_blank">Kosho Ryu Kempo</a>, <a href="http://www.koryu-uchinadi.com" rel="noreferrer noopener" target="_blank">Koryu Uchinadi</a>, and Shotokan.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;