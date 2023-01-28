import expres from "express";
const router = expres.Router();
import {
  getBoardGames,
  getBoardGamesById,
  updateBoardGame,
  deleteBoardGame,
  addNewBoardGame,
} from "../controllers/boardGameController.js";

router.route("/").get(getBoardGames);
router
  .route("/:id")
  .get(getBoardGamesById)
  .put(updateBoardGame)
  .delete(deleteBoardGame);
router.post("/add", addNewBoardGame);

export default router;
