import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import GamesScreen from "./screens/GamesScreen";
import StudiosScreen from "./screens/StudiosScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/igre" component={GamesScreen} />
        <Route path="/igra/:id" component={ProductScreen} />
        <Route path="/studio" component={StudiosScreen} />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
