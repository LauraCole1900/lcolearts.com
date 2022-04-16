import React, { ReactElement } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import linkedin from "../../pix/linkedin-icon-128px.png"
import github from "../../pix/github-mark-dark.png";
import resume from "../../pix/resume-document-icon.png";
import "./style.css";

const Contact = (): ReactElement => {


  return (
    <Container fluid>
      <Row>
        <Col sm={{ span: 10, offset: 1 }}>
          <h1> Contact Me</h1>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 9, offset: 2 }}>
          <p>Find me professionally:</p>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 2, offset: 1 }} className="flexStart">
          <p className="git">LinkedIn:&nbsp;</p>
          <a href="https://www.linkedin.com/in/laura-cole-3661b01b9/?trk=profile-badge" rel="noreferrer noopener" target="_blank"><Image fluid src={linkedin} alt="LinkedIn icon" className="icon" /></a>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 2, offset: 1 }} className="flexStart">
          <p className="git">&nbsp;&nbsp;GitHub:&nbsp;&nbsp;</p>
          <a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank"><Image fluid src={github} alt="GitHub icon" className="icon" /></a>
        </Col>
        <Col sm={6}>
          <p>email: <a href="mailto:lauracole1900@comcast.net">lauracole1900@comcast.net</a></p>
          <p>Phone: (970) 353-0872</p>
        </Col>
      </Row>
      <Row>
        <Col sm={{ span: 2, offset: 1 }} className="flexStart">
          <p className="git">&nbsp;Résumé:&nbsp;</p>
          <a href="https://drive.google.com/file/d/1gOy3CkufWH_k_Y9dVFQYfZc955bPCT25/view?usp=sharing" rel="noreferrer noopener" target="_blank"><Image fluid src={resume} alt="Résumé icon" className="icon" /></a>
        </Col>
      </Row>
    </Container >
  );
}

export default Contact;