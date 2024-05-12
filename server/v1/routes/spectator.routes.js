import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { spectatorController } from "../../controllers/spectator.controller.js";

const router = Router();

//See all spectators
router.get(
  "/auth/spectators",
  authenticationRequired,
  spectatorController.getAllSpectators
);

//See all my spectators
router.get(
  "/auth/admin/spectators/me",
  authenticationRequired,
  spectatorController.getAllMySpectators
);

//See one spectator
router.get(
  "/auth/spectators/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  spectatorController.getOneSpectator
);

//Create a new spectator
router.post(
  "/auth/admin/spectators",
  authenticationRequired,
  authorizationRequired,
  spectatorController.createSpectator
);

//Update a spectator
router.put(
  "/auth/admin/spectators/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  authorizationRequired,
  spectatorController.updateSpectator
);

//Delete a spectator
router.delete(
  "/auth/admin/spectators/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  authorizationRequired,
  spectatorController.deleteSpectator
);

export default router;
