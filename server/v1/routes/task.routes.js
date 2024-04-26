import { Router } from "express";
import { authRequired } from "../../middlewares/auth.middleware.js";
import {
  getTasks,
  getAllTaks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../../controllers/task.controller.js";

const router = Router();

router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);

router.get("/allTask", getAllTaks);

router.post("/tasks", authRequired, createTask);
router.delete("/tasks/:id", authRequired, deleteTask);
router.put("/tasks/:id", authRequired, updateTask);

export default router;
