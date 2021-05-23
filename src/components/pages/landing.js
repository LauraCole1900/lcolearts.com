import React from "react";
import Container from "react-bootstrap/Container";
import LandingText from "../lander";
import "./style.css"

const Landing = () => {
  return (
    <Container fluid>
      <LandingText 
        texts={[]}
        wait={3000}
        waitbt={30}
        speed={30}
      />
    </Container>
  );
}

export default Landing;
