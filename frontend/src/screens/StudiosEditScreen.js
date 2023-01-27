import React, { useState, useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const StudiosEditScreen = ({ match }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const history = useHistory();

  useEffect(() => {
    const fetchGameStudio = async () => {
      const { data } = await axios.get(`/api/game-studios/${match.params.id}`);

      setName(data.name);
      setImage(data.image);
      setDescription(data.description);
      console.log(data);
    };

    fetchGameStudio();
  }, []);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImage(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.put(`/api/game-studios/${match.params.id}`, {
        name: name,
        image: image,
        description: description,
      });
      history.push("/studios-panel");
      console.log(data);
      alert("Successful Update");
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

  return (
    <div>
      <Container>
        <Link className="btn btn-light my-3" to="/studios-panel">
          Natrag
        </Link>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Edit</h2>
                  <p className=" mb-5">Uredite navedeni studio</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                        />
                      </Form.Group>
                      <Form.Group controlId="image">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter image url"
                          value={image}
                          onChange={(event) => setImage(event.target.value)}
                        ></Form.Control>
                        <Form.Control
                          type="file"
                          id="image-file"
                          label="Choose file"
                          custom
                          onChange={uploadFileHandler}
                        />
                      </Form.Group>

                      <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          as="textarea"
                          rows={10}
                        ></Form.Control>
                      </Form.Group>
                      <div className="d-grid">
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={(event) => handleSubmit(event)}
                        >
                          Update
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default StudiosEditScreen;
