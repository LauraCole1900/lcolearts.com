import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Email, GitHubLight, LinkedIn, Phone, Resume } from "../../pix";
import "./style.css";


const Footer = (): ReactElement => {


  return (
    <div className="footer">
      <Row>
        <Col sm={{ span: 1, offset: 6 }} className="center">
          <p>Contact me:</p>
        </Col>
        <Col xs={1}>
          <a href="mailto:lauracole1900@comcast.net" data-toggle="popover" title="Email me: lauracole1900@comcast.net"><Image fluid src={Email} alt="Email icon" className="icon" /></a>
        </Col>
        <Col xs={1}>
          <a href="tel:970-353-0872" data-toggle="popover" title="Call me: 970-353-0872"><Image fluid src={Phone} alt="Phone icon" className="icon" /></a>
        </Col>
        <Col xs={1}>
          <a href="https://www.linkedin.com/in/laura-cole-3661b01b9/?trk=profile-badge" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My LinkedIn"><Image fluid src={LinkedIn} alt="LinkedIn icon" className="icon" /></a>
        </Col>
        <Col xs={1}>
          <a href="https://github.com/LauraCole1900" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My GitHub"><Image fluid src={GitHubLight} alt="GitHub icon" className="icon" /></a>
        </Col>
        <Col xs={1}>
          <a href="https://drive.google.com/file/d/1gOy3CkufWH_k_Y9dVFQYfZc955bPCT25/view?usp=sharing" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My Résumé"><Image fluid src={Resume} alt="Résumé icon" className="ltBgFooter" /></a>
        </Col>
      </Row>
    </div >
  )
}

export default Footer;