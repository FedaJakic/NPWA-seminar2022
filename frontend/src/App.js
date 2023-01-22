import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import GamesScreen from "./screens/GamesScreen";
import GameScreen from "./screens/GamesScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/igre" component={GamesScreen} />
        <Route path="/igre/:id" component={GameScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
