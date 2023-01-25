import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import boardGamesRoutes from "./routes/boardGamesRoutes.js";
import gameStudiosRoutes from "./routes/gameStudiosRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API TEST");
});

app.use("/api/board-games", boardGamesRoutes);

app.get("/api/game-studios", gameStudiosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
