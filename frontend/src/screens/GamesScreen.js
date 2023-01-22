import React from "react";
import { Row, Col } from "react-bootstrap";
import boardGames from "../boardGames";
import Product from "../components/Product";

const GameScreen = () => {
  return (
    <>
      <h1>Društvene igre</h1>
      <Row>
        {boardGames.map((boardGame) => (
          <Col sm={12} md={6} lg={4} key={boardGame._id}>
            <Product game={boardGame} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default GameScreen;
