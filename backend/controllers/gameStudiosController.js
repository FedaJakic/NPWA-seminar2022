import asyncHandler from "express-async-handler";
import GameStudios from "../models/boardGameModel.js";

// @desc Get all Game Studios
// @route Get /api/game-studios
// @access PUBLIC
const getGameStudios = asyncHandler(async (req, res) => {
  const gameStudios = await GameStudios.find({});
  res.json(gameStudios);
});

export { getGameStudios };
