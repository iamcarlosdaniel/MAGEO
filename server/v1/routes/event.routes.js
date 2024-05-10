import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { eventController } from "../../controllers/event.controller.js";

const router = Router();

router.get("/events", authenticationRequired, eventController.getAllEvents);
router.get("/events/:id", authenticationRequired, eventController.getOneEvent);
router.post("/events", authenticationRequired, eventController.createEvent);
router.put("/events/:id", authenticationRequired, eventController.updateEvent);
router.delete(
  "/events/:id",
  authenticationRequired,
  eventController.deleteEvent
);
export default router;
