import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as contactController from "../controllers/contact.js";

const router = Router();

router.post("/", auth, contactController.createContact);
router.put("/", auth, contactController.updateContact);

router.delete("/:contactId", auth, contactController.deleteContact);

export { router };
