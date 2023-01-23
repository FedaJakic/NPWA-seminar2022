import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Container, Image } from "react-bootstrap";
import products from "../components/Product";

const ProductScreen = ({ match }) => {
  return (
    <Container>
      <Link className="btn btn-light my-3" to="/">
        Natrag
      </Link>
    </Container>
  );
};

export default ProductScreen;
