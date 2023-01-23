import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Studio from "../components/Studio";
import gameStudios from "../gameStudios";

const StudiosScreen = () => {
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
