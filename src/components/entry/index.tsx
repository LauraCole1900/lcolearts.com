import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Entry } from "../../utils";

const EntryCard = (props: any): ReactElement => {


  return (
    <>
      {props.entries.map((entry: Entry) => (
        <Card key={entry._id.toString()}>
          <Card.Header>
            <Link to={`/blog/${entry._id}`}>
              <h1>{entry.title}</h1>
            </Link>
            <p>{entry.created_At}</p>
          </Card.Header>
          <Card.Body>
            <p>{entry.content}</p>
          </Card.Body>
          <Card.Footer>
            <p>{entry.tags.join(", ")}</p>
          </Card.Footer>
        </Card>
      ))}
    </>
  )
}

export default EntryCard;