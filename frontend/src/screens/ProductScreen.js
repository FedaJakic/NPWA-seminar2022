import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Container,
  Image,
  Card,
  Button,
} from "react-bootstrap";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [boardGame, setBoardGame] = useState([]);
  const { addBoardGameToCart } = useContext(GlobalContext);
  const { addBoardGameToFavourite } = useContext(GlobalContext);

  useEffect(() => {
    const fetchBoardGame = async () => {
      const { data } = await axios.get(`/api/board-games/${match.params.id}`);

      setBoardGame(data);
    };

    fetchBoardGame();
  }, [match]);

  const addToCart = (event) => {
    addBoardGameToCart(boardGame);
    alert("Added to cart");
  };

  const addToFavourite = (event) => {
    addBoardGameToFavourite(boardGame);
    alert("Added to favourite");
  };

  return (
    <Container>
      <Link className="btn btn-light my-3" to="/igre">
        Natrag
      </Link>
      <Row>
        <Col md={6}>
          <Image src={boardGame.image} alt={boardGame.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{boardGame.name}</h2>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p> Opis: {boardGame.description}</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Cijena:</Col>
                  <Col>
                    <strong>{boardGame.price} €</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={(event) => addToCart()}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={(event) => addToFavourite()}
                >
                  Add to Favourite
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductScreen;
