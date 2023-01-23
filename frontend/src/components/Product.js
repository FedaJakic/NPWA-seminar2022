import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ game }) => {
  return (
    <Card className="my-3 p-3 rounded" bg="primary">
      <Link to={`/igra/${game._id}`}>
        <Card.Img src={game.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/igra/${game._id}`}>
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
