import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { protocolController } from "../../controllers/protocol.controller.js";

const router = Router();

router.get(
  "/protocols",
  authenticationRequired,
  protocolController.getAllProtocols
);

router.get(
  "/protocols/:id",
  authenticationRequired,
  protocolController.getOneProtocol
);

router.post(
  "/protocols",
  authenticationRequired,
  protocolController.createProtocol
);

router.put(
  "/protocols/:id",
  authenticationRequired,
  protocolController.updateProtocol
);

router.delete(
  "/protocols/:id",
  authenticationRequired,
  protocolController.deleteProtocol
);

export default router;
