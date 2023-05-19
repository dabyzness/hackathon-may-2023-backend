import { Router } from "express";
import * as authController from "../controllers/auth.js";
import { encryptPassword } from "../middleware/auth.js";

const router = Router();

router.post("/signup", encryptPassword, authController.signup);
router.post("/login", authController.login);

export { router };
