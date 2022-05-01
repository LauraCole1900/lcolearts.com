import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { GitHubLight, LinkedIn } from "../../pix";
import "./style.css";


const Footer = (): ReactElement => {

  
  return (
    <div className="footer">
      <Row>
        <Col sm={10}></Col>
        <Col sm={1}>
          <a href="https://www.linkedin.com/in/laura-cole-3661b01b9/?trk=profile-badge" rel="noreferrer noopener" target="_blank"><Image fluid src={LinkedIn} alt="LinkedIn icon" className="icon" /></a>
        </Col>
        <Col sm={1}>
          <a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank"><Image fluid src={GitHubLight} alt="GitHub icon" className="icon" /></a>
        </Col>
      </Row>
    </div >
  )
}

export default Footer;