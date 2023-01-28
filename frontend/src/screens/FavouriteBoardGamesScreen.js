import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image, Container, Button } from "react-bootstrap";

const FavouriteBoardGamesScreen = () => {
  const { favouriteList } = useContext(GlobalContext);
  const { removeBoardGameFromFavourite } = useContext(GlobalContext);

  const deleteHandler = (boardGame) => {
    removeBoardGameFromFavourite(boardGame);
  };

  return (
    <Container className="container-margin-top">
      <Row>
        <Col md={8}>
          <h1>Favourite</h1>
          {favouriteList.length === 0 ? (
            <h1>
              You dont have Favourite board games <Link to="/">Go Back</Link>
            </h1>
          ) : (
            <ListGroup variant="flush">
              {favouriteList.map((item) => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler(item)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default FavouriteBoardGamesScreen;
