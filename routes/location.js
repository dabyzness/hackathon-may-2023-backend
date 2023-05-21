import { Router } from "express";
import { auth } from "../middleware/auth.js";
import * as locationController from "../controllers/location.js";

const router = Router();

router.get("/", locationController.getAllLocation);
router.get("/:locationId", locationController.getLocation);

router.post("/", auth, locationController.createLocation);
router.put("/", auth, locationController.updateLocation);

router.delete("/:locationId", auth, locationController.deleteLocation);

export { router };
