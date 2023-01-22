import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ game }) => {
  return (
    <Card bg="primary" style={{ width: "20rem", margin: "0 0 2rem 0" }}>
      <Link to={`/igre/${game._id}`}>
        <Card.Img src={game.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/igre/${game._id}`}>
          <Card.Title as="h4">
            <strong>{game.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="h3">{game.price} €</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
