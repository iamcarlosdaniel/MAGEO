import { Router } from "express";
import { authenticationRequired } from "../../middlewares/authentication.middleware.js";
import { authorizationRequired } from "../../middlewares/authorization.middleware.js";
import { eventController } from "../../controllers/event.controller.js";

const router = Router();

//See all events
router.get(
  "/auth/users/events",
  authenticationRequired,
  eventController.getAllEvents
);

//See all my events
router.get(
  "/auth/users/events/me",
  authenticationRequired,
  eventController.getAllMyEvents
);

//See a event
router.get(
  "/auth/users/events/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  eventController.getOneEvent
);

//Create a event
router.post(
  "/auth/users/events",
  authenticationRequired,
  eventController.createEvent
);

//Update a event
router.put(
  "/auth/users/events/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  eventController.updateEvent
);

//Delete a event
router.delete(
  "/auth/users/events/:id([0-9a-fA-F]{24})",
  authenticationRequired,
  eventController.deleteEvent
);

//Accept a event
router.put(
  "/auth/admin/events/:id([0-9a-fA-F]{24})/accept",
  authenticationRequired,
  authorizationRequired,
  eventController.acceptEvent
);

//Reject a event
router.put(
  "/auth/admin/events/:id([0-9a-fA-F]{24})/reject",
  authenticationRequired,
  authorizationRequired,
  eventController.rejectEvent
);

export default router;
