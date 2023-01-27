import path from "path";
import express, { application } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import boardGamesRoutes from "./routes/boardGamesRoutes.js";
import gameStudiosRoutes from "./routes/gameStudiosRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API TEST");
});

app.use("/api/board-games", boardGamesRoutes);
app.use("/api/game-studios", gameStudiosRoutes);
app.use("/api/users", userRoutes);
app.use("/api/upload", uploadRoutes);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
