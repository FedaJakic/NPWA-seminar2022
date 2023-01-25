import expres from "express";
import asyncHandler from "express-async-handler";
import BoardGames from "../models/boardGameModel.js";
const router = expres.Router();

// @desc Get all Board Games
// @route Get /api/board-games
// @access PUBLIC
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const boardGames = await BoardGames.find({});
    res.json(boardGames);
  })
);

// @desc Get Board Game by ID
// @route Get /api/board-games/:id
// @access PUBLIC
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const boardGame = await BoardGames.findById(req.params.id);

    if (boardGame) {
      res.json(boardGame);
    } else {
      res.status(404).json({ message: 'Game not Found"' });
    }
  })
);

export default router;
