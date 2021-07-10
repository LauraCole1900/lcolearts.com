import React, { ReactElement } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Blog = (): ReactElement => {


  return (
    <>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1>Blog</h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Blog;