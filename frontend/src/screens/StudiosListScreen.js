import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { Table, Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios";

const StudiosListScreen = () => {
  const [gameStudios, setGameStudios] = useState([]);
  const history = useHistory();

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(`/api/game-studios/${id}`);
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
    const fetchGameStudios = async () => {
      const { data } = await axios.get("/api/game-studios");

      setGameStudios(data);
    };

    fetchGameStudios();
  }, []);
  return (
    <>
      {sessionStorage.getItem("isAdmin") == "true" ? (
        <Container>
          <h1>Studios</h1>
          <Row className="align-items-center">
            <Col className="text-right">
              <Button className="my-3">
                <i className="fas fa-plus"></i>{" "}
                <Link to={"/create-studio"}>Create Studio</Link>
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
              {gameStudios.map((studio) => (
                <tr key={studio._id}>
                  <td>{studio._id}</td>
                  <td>{studio.name}</td>
                  <td>
                    <LinkContainer to={`/studio-edit/${studio._id}`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(studio._id)}
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

export default StudiosListScreen;
