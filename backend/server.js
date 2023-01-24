import express from "express";
import dotenv from "dotenv";
import boardGames from "./data/boardGames.js";
import gameStudios from "./data/gameStudios.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API TEST");
});

app.get("/api/board-games", (req, res) => {
  res.json(boardGames);
});

app.get("/api/board-games/:id", (req, res) => {
  const game = boardGames.find((p) => p._id === req.params.id);
  res.json(game);
});

app.get("/api/game-studios", (req, res) => {
  res.json(gameStudios);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
