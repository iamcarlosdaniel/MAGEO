import { Router } from "express";
import { authRequired } from "../../middlewares/auth.middleware.js";
import { eventController } from "../../controllers/event.controller.js";

const router = Router();

router.get("/events", authRequired, eventController.getAllEvents);
router.get("/events/:id", authRequired, eventController.getOneEvent);
router.post("/events", authRequired, eventController.createEvent);
export default router;
