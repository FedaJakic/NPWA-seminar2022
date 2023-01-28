import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { Table, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";

const BoardGameListScreen = () => {
  const [boardGames, setBoardGame] = useState([]);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`/api/board-games/${id}`);
      alert("Successful Delete");
      window.location.reload();
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert(error.message);
      }
    }
  };

  useEffect(() => {
    const fetchBoardGame = async () => {
      const { data } = await axios.get(`/api/board-games`);

      setBoardGame(data);
    };

    fetchBoardGame();
  }, []);
  return (
    <>
      {sessionStorage.getItem("isAdmin") == "true" ? (
        <Container>
          <h1>Board Games</h1>
          <Row className="align-items-center">
            <Col className="text-right">
              <Button className="my-3">
                <i className="fas fa-plus"></i>{" "}
                <Link to={"/create-board-game"}>Create Board Game</Link>
              </Button>
            </Col>
          </Row>
          <Table
            striped
            bordered
            hover
            responsive
            className="table-sm"
            variant="dark"
          >
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {boardGames.map((game) => (
                <tr key={game._id}>
                  <td>{game._id}</td>
                  <td>{game.name}</td>
                  <td>
                    <LinkContainer to={`/boardgame-edit/${game._id}`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(game._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      ) : (
        <Container>
          <h1>You don't have access, you are not admin</h1>
        </Container>
      )}
    </>
  );
};

export default BoardGameListScreen;
