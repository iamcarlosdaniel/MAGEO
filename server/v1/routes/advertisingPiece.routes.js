import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { advertisingPieceController } from "../../controllers/advertisingPiece.controller.js";

const router = Router();

//See all advertising pieces
router.get(
  "/auth/users/advertising-pieces",
  authenticationRequired,
  advertisingPieceController.getAllAdvertisingPieces
);

//See all my advertising pieces
router.get(
  "/auth/users/advertising-pieces",
  authenticationRequired,
  advertisingPieceController.getAllMyAdvertisingPieces
);

// See a advertising pieces
router.get(
  "/auth/users/advertising-pieces/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  advertisingPieceController.getOneAdvertisingPiece
);

//Create a advertising piece
router.post(
  "/auth/users/advertising-pieces",
  authenticationRequired,
  advertisingPieceController.createAdvertisingPiece
);

//Update a advertising piece
router.put(
  "/auth/users/advertising-pieces/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  advertisingPieceController.updateAdvertisingPiece
);

//Delete a advertising piece
router.delete(
  "/auth/users/advertising-pieces/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  advertisingPieceController.deleteAdvertisingPiece
);

//Accept a advertising piece
router.put(
  "/auth/admin/advertising-pieces/:id([0-9a-fA-F]{24})/accept",
  authenticationRequired,
  authorizationRequired,
  advertisingPieceController.acceptAdvertisingPiece
);

//Reject a advertising piece
router.put(
  "/auth/admin/advertising-pieces/:id([0-9a-fA-F]{24})/reject",
  authenticationRequired,
  authorizationRequired,
  advertisingPieceController.rejectAdvertisingPiece
);

export default router;
