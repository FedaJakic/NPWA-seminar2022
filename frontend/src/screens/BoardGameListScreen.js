import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Container } from "react-bootstrap";
import axios from "axios";

const BoardGameListScreen = () => {
  const [boardGames, setBoardGame] = useState([]);

  const deleteHandler = (id) => {
    alert("Delete handler");
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
          )
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
