import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as healthController from "../controllers/health.js";

const router = Router();

export { router };
