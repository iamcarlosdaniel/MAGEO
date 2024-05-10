import { Router } from "express";
import { authenticationController } from "../../controllers/authentication.controller.js";
import { validateSchema } from "../../middlewares/validator.middleware.js";
import {
  registerSchema,
  loginSchema,
} from "../../database/schemas/authentication.schema.js";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";

const router = Router();

//Register new user
router.post(
  "/register",
  validateSchema(registerSchema),
  authenticationController.register
);

//Login a user
router.post(
  "/login",
  validateSchema(loginSchema),
  authenticationController.login
);

//Logout user
router.post("/logout", authenticationController.logout);

//View authentication Status
router.get(
  "/auth/status",
  authenticationRequired,
  authenticationController.authStatus
);

//Password recovery
//router.post("/password/reset-request/nwnfwnfwnfnwinf");
//router.post("/password/reset");

export default router;
