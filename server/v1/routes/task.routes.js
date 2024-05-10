import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import {
  getTasks,
  getAllTaks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../../controllers/task.controller.js";

const router = Router();

router.get("/tasks", authenticationRequired, getTasks);
router.get("/tasks/:id", authenticationRequired, getTask);

router.get("/allTask", getAllTaks);

router.post("/tasks", authenticationRequired, createTask);
router.delete("/tasks/:id", authenticationRequired, deleteTask);
router.put("/tasks/:id", authenticationRequired, updateTask);

export default router;
