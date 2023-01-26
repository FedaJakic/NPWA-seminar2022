import expres from "express";
const router = expres.Router();
import {
  getBoardGames,
  getBoardGamesById,
} from "../controllers/boardGameController.js";

router.route("/").get(getBoardGames);
router.route("/:id").get(getBoardGamesById);

export default router;
