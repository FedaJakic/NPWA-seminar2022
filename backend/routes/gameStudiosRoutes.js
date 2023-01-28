import expres from "express";
import {
  getGameStudios,
  getGameStudioById,
  updateGameStudio,
  deleteGameStudio,
  addNewStudio,
} from "../controllers/gameStudiosController.js";
const router = expres.Router();

router.route("/").get(getGameStudios);
router
  .route("/:id")
  .get(getGameStudioById)
  .put(updateGameStudio)
  .delete(deleteGameStudio);
router.post("/add", addNewStudio);

export default router;
