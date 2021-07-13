import React, { ReactElement } from "react";
import { useQuery } from "@apollo/client";
import { Col, Container, Row } from "react-bootstrap";
import { QUERY_ALL_ENTRIES } from "../../utils";
import EntryCard from "../entry";

const Blog = (): ReactElement => {
  // GraphQL variables
  const { loading, data, refetch } = useQuery(QUERY_ALL_ENTRIES, {});
  const entriesArr = data?.getAllEntries || [];
  const arrToSort = [...entriesArr];
  const sortedEntries = arrToSort.sort((a, b) => (a.created_At > b.created_At) ? 1 : -1)


  return (
    <>
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <h1>Blog</h1>
          </Col>
        </Row>
        {loading &&
          <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <p>Loading....</p>
            </Col>
          </Row>}
        {data
          ? <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <EntryCard entries={sortedEntries} />
            </Col>
          </Row>
          : <Row>
            <Col sm={1}></Col>
            <Col sm={10}>
              <h1>Coming soon!</h1>
            </Col>
          </Row>}
      </Container>
    </>
  )
}

export default Blog;