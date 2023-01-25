import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import boardGame from "./data/boardGames.js";
import gameStudios from "./data/gameStudios.js";
import User from "./models/userModel.js";
import GameStudio from "./models/studioModel.js";
import BoardGame from "./models/boardGameModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await BoardGame.deleteMany();
    await GameStudio.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id;

    const sampleBoardGame = boardGame.map((game) => {
      return { ...game, user: adminUser };
    });

    await BoardGame.insertMany(sampleBoardGame);

    await GameStudio.insertMany(gameStudios);

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await BoardGame.deleteMany();
    await GameStudio.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
