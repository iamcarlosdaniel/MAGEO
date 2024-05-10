import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { spectatorController } from "../../controllers/spectator.controller.js";

const router = Router();

//TODO: Segmentar las rutas para que solo el administrador pueda acceder a ellas

//*No se necesita ser admin para ver los spectators por que se requeriran luego

router.get(
  "auth/spectators",
  authenticationRequired,
  spectatorController.getAllSpectators
);

router.get(
  "/auth/admin/spectators/me",
  authenticationRequired,
  spectatorController.getAllMySpectators
);

router.get(
  "auth/spectators/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  spectatorController.getOneSpectator
);

router.post(
  "auth/admin/spectators",
  authenticationRequired,
  authorizationRequired,
  spectatorController.createSpectator
);

router.put(
  "auth/admin/spectators/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  authorizationRequired,
  spectatorController.updateSpectator
);

router.delete(
  "auth/admin/spectators/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  authorizationRequired,
  spectatorController.deleteSpectator
);

export default router;
