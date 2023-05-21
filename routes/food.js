import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as foodController from "../controllers/food.js";

const router = Router();

router.get("/", foodController.getAllFood);

router.post("/", auth, foodController.createFood);
router.put("/", auth, foodController.updateFood);

router.delete("/:foodId", auth, foodController.deleteFood);

export { router };
