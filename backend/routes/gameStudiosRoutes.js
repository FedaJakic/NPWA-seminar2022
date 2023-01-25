import expres from "express";
import asyncHandler from "express-async-handler";
import GameStudios from "../models/studioModel.js";
const router = expres.Router();

// @desc Get all Game Studios
// @route Get /api/game-studios
// @access PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const gameStudios = await GameStudios.find({});
    res.json(gameStudios);
  })
);

export default router;
