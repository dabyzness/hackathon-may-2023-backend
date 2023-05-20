import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as healthController from "../controllers/health.js";

const router = Router();

router.get("/", healthController.getAllHealth);
router.post("/", auth, healthController.createHealth);

router.delete("/:healthId", auth, healthController.deleteHealth);

export { router };
