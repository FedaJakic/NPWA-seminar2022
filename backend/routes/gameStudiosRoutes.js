import expres from "express";
import {
  getGameStudios,
  getGameStudioById,
  updateGameStudio,
  deleteGameStudio,
} from "../controllers/gameStudiosController.js";
const router = expres.Router();

router.route("/").get(getGameStudios);
router
  .route("/:id")
  .get(getGameStudioById)
  .put(updateGameStudio)
  .delete(deleteGameStudio);

export default router;
