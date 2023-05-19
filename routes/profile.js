import { Router } from "express";
import * as profileController from "../controllers/profile.js";
import { auth } from "../middleware/auth.js";

const router = Router();

router.get("/:profileId", auth, profileController.getProfile);

export { router };
