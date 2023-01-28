import asyncHandler from "express-async-handler";
import GameStudios from "../models/studioModel.js";

// @desc Get all Game Studios
// @route Get /api/game-studios
// @access PUBLIC
const getGameStudios = asyncHandler(async (req, res) => {
  const gameStudios = await GameStudios.find({});
  res.json(gameStudios);
});

// @desc Get Game studio by ID
// @route Get /api/game-studios/:id
// @access PRIVATE/Admin
const getGameStudioById = asyncHandler(async (req, res) => {
  const gameStudio = await GameStudios.findById(req.params.id).select(
    "-password"
  );
  if (gameStudio) {
    res.json(gameStudio);
  } else {
    res.status(404);
    throw new Error("Game Studio Not Found");
  }
});

// @desc    Update game studio
// @route   PUT /api/game-studios/:id
// @access  Private/Admin
const updateGameStudio = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body;

  const gameStudio = await GameStudios.findById(req.params.id);

  if (gameStudio) {
    gameStudio.name = name;
    gameStudio.image = image;
    gameStudio.description = description;

    const updatedGameStudio = await gameStudio.save();
    res.json(updatedGameStudio);
  } else {
    res.status(404);
    throw new Error("Game Studio not found");
  }
});

// @desc    Delete game studio
// @route   DELETE /api/game-studios/:id
// @access  Private/Admin
const deleteGameStudio = asyncHandler(async (req, res) => {
  const gameStudio = await GameStudios.findById(req.params.id);

  if (gameStudio) {
    await gameStudio.remove();
    res.json({ message: "Game studio removed" });
  } else {
    res.status(404);
    throw new Error("Game Studio not found");
  }
});

// @desc    Register a new user
// @route   POST /api/game-studio/add
// @access  Private/Admin
const addNewStudio = asyncHandler(async (req, res) => {
  const { name, image, description } = req.body;

  const studioExist = await GameStudios.findOne({ name });

  if (studioExist) {
    res.status(400);
    throw new Error("Studio already exists");
  }

  const studio = await GameStudios.create({
    name,
    image,
    description,
  });

  if (studio) {
    res.status(201).json({
      _id: studio._id,
      name: studio.name,
      image: studio.email,
      description: studio.description,
    });
  } else {
    res.status(400);
    throw new Error("Invalid studio data");
  }
});

export {
  getGameStudios,
  getGameStudioById,
  updateGameStudio,
  deleteGameStudio,
  addNewStudio,
};
