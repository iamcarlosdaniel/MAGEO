import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { logisticController } from "../../controllers/logistic.controller.js";

const router = Router();

//See all logistics
router.get(
  "/auth/users/logistics",
  authenticationRequired,
  logisticController.getAllLogistic
);

//See all my logistics
router.get(
  "/auth/users/logistics/me",
  authenticationRequired,
  logisticController.getAllMyLogistics
);

//See a logistic
router.get(
  "/auth/users/logistics/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  logisticController.getOneLogistic
);

//Create a logistic
router.post(
  "/auth/users/logistics",
  authenticationRequired,
  logisticController.createLogistic
);

//Update a logistic
router.put(
  "/auth/users/logistic/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  logisticController.updateLogistic
);

//Delete a logistic
router.delete(
  "/auth/users/logistics/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  logisticController.deleteLogistic
);

//Accept a logistic
router.put(
  "/auth/admin/logistic/:id([0-9a-fA-F]{24})/accept",
  authenticationRequired,
  authorizationRequired,
  logisticController.acceptLogistic
);

//Reject a logistic
router.put(
  "/auth/admin/logistic/:id([0-9a-fA-F]{24})/reject",
  authenticationRequired,
  authorizationRequired,
  logisticController.rejectLogistic
);

export default router;
