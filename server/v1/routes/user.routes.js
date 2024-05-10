import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { userController } from "../../controllers/user.controller.js";

const router = Router();

//See user information by Id
router.get(
  "/auth/users/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  userController.getUserInformation
);

//See my user information
router.get(
  "/auth/users/me",
  authenticationRequired,
  userController.getMyUserInformation
);

//Update my user information
router.put(
  "/auth/users/me",
  authenticationRequired,
  userController.updateMyUserInformation
);

export default router;
