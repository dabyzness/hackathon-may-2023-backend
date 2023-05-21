import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as itemController from "../controllers/item.js";

const router = Router();

router.get("/", itemController.getAllItem);

router.post("/", auth, itemController.createItem);
router.put("/", auth, itemController.updateItem);

router.delete("/:itemId", auth, itemController.deleteItem);

export { router };
