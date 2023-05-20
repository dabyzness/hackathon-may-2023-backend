import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as clothingController from "../controllers/clothing.js";

const router = Router();

router.get("/", clothingController.getAllClothing);
router.post("/", auth, clothingController.createClothing);
router.put("/", auth, clothingController.updateClothing);
router.delete("/clothingId", auth, clothingController.deleteClothing);

export { router };
