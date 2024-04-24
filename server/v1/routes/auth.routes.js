import { Router } from "express";
import { authController } from "../../controllers/auth.controller.js";

import { validateSchema } from "../../middlewares/validator.middleware.js";
import {
  registerSchema,
  loginSchema,
} from "../../database/schemas/auth.schema.js";

const router = Router();

//Basic Operations
router.post(
  "/register",
  validateSchema(registerSchema),
  authController.register
);
router.post("/login", validateSchema(loginSchema), authController.login);
router.post("/logout", authController.logout);

//Authentication Status
router.get("/auth/status", authController.authStatus);

//Password recovery
//router.post("/password/reset-request/nwnfwnfwnfnwinf");
//router.post("/password/reset");

export default router;
