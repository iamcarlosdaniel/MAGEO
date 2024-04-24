import { Router } from "express";
import { userController } from "../../controllers/user.controller.js";
import { authRequired } from "../../middlewares/auth.middleware.js";

const router = Router();

//View user information
router.get("/auth/users", authRequired, userController.getUser);

//Update user information
router.post("/auth/users", authRequired, userController.updateUser);

//Delete user
router.post("/auth/users", authRequired, userController.deleteUser);

export default router;
