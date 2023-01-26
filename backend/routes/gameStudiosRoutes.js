import expres from "express";
import { getGameStudios } from "../controllers/gameStudiosController.js";
const router = expres.Router();

router.route("/").get(getGameStudios);

export default router;
