import { ReactElement } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Bluesky, Email, GitHubLight, LinkedIn, Phone, Resume, YouTube } from "../../pix";
import "./style.css";


const Footer = (): ReactElement => {


  return (
    <div className="footer">
      <Row>
        <Col sm={{ span: 1, offset: 4 }} className="center">
          <p className="contact-text">Contact me:</p>
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
          <a href="https://www.youtube.com/@lauracole4927" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My YouTube"><Image fluid src={YouTube} alt="YouTube icon" className="icon round-corners" /></a>
        </Col>
        <Col xs={1}>
          <a href="https://bsky.app/profile/lcolearts.bsky.social" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My Bluesky"><Image fluid src={Bluesky} alt="Bluesky icon" className="icon round-corners" /></a>
        </Col>
        {/* <Col xs={1}>
          <a href="https://www.facebook.com/profile.php?id=61550990845953" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My Facebook"><Image fluid src={Facebook} alt="Facebook icon" className="icon" /></a>
        </Col> */}
        <Col xs={1}>
          <a href="https://docs.google.com/document/d/1xb-drpk72rutagfO5l-LvVFER2TR3QkL/" rel="noreferrer noopener" target="_blank" data-toggle="popover" title="My Résumé"><Image fluid src={Resume} alt="Résumé icon" className="ltBgFooter" /></a>
        </Col>
      </Row>
    </div >
  )
}

export default Footer;