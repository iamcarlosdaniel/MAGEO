import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { advertisingPieceController } from "../../controllers/advertisingPiece.controller.js";

const router = Router();

//See all Advertising Pieces
router.get(
  "auth/users/advertising-pieces",
  authenticationRequired,
  authorizationRequired,
  advertisingPieceController.getAllAdvertisingPieces
);

//TODO: See all My Advertising Pieces

// See a Advertising Pieces
router.get(
  "auth/users/advertising-pieces/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  advertisingPieceController.getOneAdvertisingPiece
);

//Create a Advertising Piece
router.post(
  "auth/users/advertising-pieces",
  authenticationRequired,
  advertisingPieceController.createAdvertisingPiece
);

//Update a Advertising Piece
router.put(
  "auth/users/advertising-pieces/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  advertisingPieceController.updateAdvertisingPiece
);

//Delete a Advertising Piece
router.delete(
  "auth/users/advertising-pieces/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  advertisingPieceController.deleteAdvertisingPiece
);

export default router;
