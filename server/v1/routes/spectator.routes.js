import { Router } from "express";
import { authRequired } from "../../middlewares/auth.middleware.js";
import { spectatorController } from "../../controllers/spectator.controller.js";

const router = Router();

router.get("/spectators", authRequired, spectatorController.getAllSpectators);
router.get(
  "/spectators/:id",
  authRequired,
  spectatorController.getOneSpectator
);
router.post("/spectators", authRequired, spectatorController.createSpectator);
router.put(
  "/spectators/:id",
  authRequired,
  spectatorController.updateSpectator
);
router.delete(
  "/spectators/:id",
  authRequired,
  spectatorController.deleteSpectator
);

export default router;
