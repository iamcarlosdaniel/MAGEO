import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getEvents,
  getEvent,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/events.controller.js";

const router = Router();

router.get("/events", authRequired, getEvents);
router.get("/event/:id", authRequired, getEvent);
router.post("");
export default router;
