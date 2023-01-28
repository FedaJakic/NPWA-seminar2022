import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState.js";
import { GlobalProviderFavourites } from "./context/GloablStateFavourites.js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUsScreen from "./screens/AboutUsScreen.js";
import HomeScreen from "./screens/HomeScreen";
import GamesScreen from "./screens/GamesScreen";
import StudiosScreen from "./screens/StudiosScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import StudiosListScreen from "./screens/StudiosListScreen";
import StudiosEditScreen from "./screens/StudiosEditScreen";
import BoardGameListScreen from "./screens/BoardGameListScreen";
import BoardGameEditScreen from "./screens/BoardGameEditScreen";
import StudioCreateScreen from "./screens/StudioCreateScreen";
import BoardGameCreateScreen from "./screens/BoardGameCreateScreen";
import CartScreen from "./screens/CartScreen";
import FavouriteBoardGamesScreen from "./screens/FavouriteBoardGamesScreen.js";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <GlobalProviderFavourites>
          <GlobalProvider>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/igre" component={GamesScreen} />
            <Route path="/igra/:id" component={ProductScreen} />
            <Route path="/studio" component={StudiosScreen} />
            <Route path="/about" component={AboutUsScreen} />

            <Route path="/login" component={LoginScreen} />
            <Route path="/signup" component={SignupScreen} />

            <Route path="/studios-panel" component={StudiosListScreen} />
            <Route path="/studio-edit/:id" component={StudiosEditScreen} />

            <Route path="/board-game-panel" component={BoardGameListScreen} />
            <Route path="/boardgame-edit/:id" component={BoardGameEditScreen} />

            <Route path="/create-studio" component={StudioCreateScreen} />
            <Route
              path="/create-board-game"
              component={BoardGameCreateScreen}
            />

            <Route path="/cart" component={CartScreen} />
            <Route path="/favourite" component={FavouriteBoardGamesScreen} />
          </GlobalProvider>
        </GlobalProviderFavourites>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
