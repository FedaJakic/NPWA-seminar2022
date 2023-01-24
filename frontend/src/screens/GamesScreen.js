import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const GamesScreen = () => {
  const [boardGames, setBoardGames] = useState([]);

  useEffect(() => {
    const fetchBoardGames = async () => {
      const { data } = await axios.get("/api/board-games");

      setBoardGames(data);
    };

    fetchBoardGames();
  }, []);

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
