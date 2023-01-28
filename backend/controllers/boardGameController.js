import asyncHandler from "express-async-handler";
import BoardGames from "../models/boardGameModel.js";

// @desc Get all Board Games
// @route Get /api/board-games
// @access PUBLIC
const getBoardGames = asyncHandler(async (req, res) => {
  const boardGames = await BoardGames.find({});
  res.json(boardGames);
});

// @desc Get Board Game by ID
// @route Get /api/board-games/:id
// @access PUBLIC
const getBoardGamesById = asyncHandler(async (req, res) => {
  const boardGame = await BoardGames.findById(req.params.id);

  if (boardGame) {
    res.json(boardGame);
  } else {
    res.status(404).json({ message: 'Game not Found"' });
  }
});

// @desc    Update BoardGame
// @route   PUT /api/board-games/:id
// @access  Private/Admin
const updateBoardGame = asyncHandler(async (req, res) => {
  const { name, image, description, brand, price } = req.body;

  const boardGame = await BoardGames.findById(req.params.id);

  if (boardGame) {
    boardGame.name = name;
    boardGame.image = image;
    boardGame.description = description;
    boardGame.brand = brand;
    boardGame.price = price;

    const updatedBoardGame = await boardGame.save();
    res.json(updatedBoardGame);
  } else {
    res.status(404);
    throw new Error("Board Game not found");
  }
});

// @desc    Delete Board Game
// @route   DELETE /api/board-games/:id
// @access  Private/Admin
const deleteBoardGame = asyncHandler(async (req, res) => {
  const boardGame = await BoardGames.findById(req.params.id);

  if (boardGame) {
    await boardGame.remove();
    res.json({ message: "Board Game removed" });
  } else {
    res.status(404);
    throw new Error("Board Game not found");
  }
});

// @desc    Register a new user
// @route   POST /api/board-game/add
// @access  Private/Admin
const addNewBoardGame = asyncHandler(async (req, res) => {
  const { name, image, description, brand, price } = req.body;

  const boardGameExist = await BoardGames.findOne({ name });

  if (boardGameExist) {
    res.status(400);
    throw new Error("Board game already exists");
  }

  const boardGame = await BoardGames.create({
    name,
    image,
    description,
    brand,
    price,
  });

  if (boardGame) {
    res.status(201).json({
      _id: boardGame._id,
      name: boardGame.name,
      image: boardGame.email,
      description: boardGame.description,
      brand: boardGame.brand,
      price: boardGame.price,
    });
  } else {
    res.status(400);
    throw new Error("Invalid board game data");
  }
});

export {
  getBoardGames,
  getBoardGamesById,
  updateBoardGame,
  deleteBoardGame,
  addNewBoardGame,
};
