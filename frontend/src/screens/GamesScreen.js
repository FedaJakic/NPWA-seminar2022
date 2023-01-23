import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import boardGames from "../boardGames";
import Product from "../components/Product";

const GamesScreen = () => {
  return (
    <Container>
      <h1>Društvene igre</h1>
      <Row>
        {boardGames.map((boardGame) => (
          <Col sm={12} md={6} lg={4} key={boardGame._id}>
            <Product game={boardGame} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GamesScreen;
