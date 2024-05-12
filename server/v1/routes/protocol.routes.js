import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { protocolController } from "../../controllers/protocol.controller.js";

const router = Router();

//See all protocols
router.get(
  "/auth/users/protocols",
  authenticationRequired,
  protocolController.getAllProtocols
);

//See all my protocols
router.get(
  "/auth/users/protocols/me",
  authenticationRequired,
  protocolController.getAllMyProtocols
);
//See a protocol
router.get(
  "/auth/users/protocols/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  protocolController.getOneProtocol
);

//Create a protocol
router.post(
  "/auth/users/protocols",
  authenticationRequired,
  protocolController.createProtocol
);

//Update a protocol
router.put(
  "/auth/users/protocols/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  protocolController.updateProtocol
);

//Delete a protocol
router.delete(
  "/auth/users/protocols/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  protocolController.deleteProtocol
);

//Accept a protocol
router.put(
  "/auth/admin/protocols/:id([0-9a-fA-F]{24})/accept",
  authenticationRequired,
  authorizationRequired,
  protocolController.acceptProtocol
);

//Reject a protocol
router.put(
  "/auth/admin/protocols/:id([0-9a-fA-F]{24})/reject",
  authenticationRequired,
  authorizationRequired,
  protocolController.rejectProtocol
);

export default router;
