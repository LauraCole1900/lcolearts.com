import React, { ReactElement } from "react";
import Container from "react-bootstrap/Container";
import LandingText from "../lander";
import "./style.css"

const Landing = (): ReactElement => {

  
  return (
    <Container fluid>
      <LandingText />
    </Container>
  );
}

export default Landing;
