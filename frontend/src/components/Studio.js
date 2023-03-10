import React from "react";
import { Card } from "react-bootstrap";

const Studio = ({ studio }) => {
  return (
    <Card
      className="my-3 p-3 rounded"
      bg="primary"
      style={{ width: "20rem", margin: "0 0 2rem 0" }}
    >
      <Card.Img src={studio.image} variant="top" />

      <Card.Body>
        <Card.Title as="h4">
          <strong>{studio.name}</strong>
        </Card.Title>

        <Card.Text as="p">{studio.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Studio;
