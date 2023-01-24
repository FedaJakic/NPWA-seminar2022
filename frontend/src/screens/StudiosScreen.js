import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Studio from "../components/Studio";
import axios from "axios";

const StudiosScreen = () => {
  const [gameStudios, setGameStudios] = useState([]);

  useEffect(() => {
    const fetchGameStudios = async () => {
      const { data } = await axios.get("/api/game-studios");

      setGameStudios(data);
    };

    fetchGameStudios();
  }, []);

  return (
    <Container>
      <h1>Studia</h1>
      <Row>
        {gameStudios.map((studio) => (
          <Col sm={12} md={6} lg={4} key={studio._id}>
            <Studio studio={studio} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StudiosScreen;
