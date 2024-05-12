import { eventService } from "../services/event.service.js";

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await eventService.getAllEvents();
    res.status(200).send({ status: "OK", data: allEvents });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMyEvents = async (req, res) => {
  try {
    const allMyEvents = await eventService.getAllMyEvents(req.user.id);
    res.status(200).send({ status: "OK", data: allMyEvents });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneEvent = async (req, res) => {
  try {
    const eventFound = await eventService.getOneEvent(req.params.id);
    res.status(200).send({ status: "OK", data: eventFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createEvent = async (req, res) => {
  try {
    const newEvent = await eventService.createEvent(req.body, req.user.id);
    res.status(200).send({ status: "OK", data: newEvent });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateEvent = async (req, res) => {
  try {
    const eventUpdate = await eventService.updateEvent(req.params.id, req.body);
    res.status(200).send({ status: "OK", data: eventUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const eventDelete = await eventService.deleteEvent(req.params.id);
    res.status(200).send({ status: "OK", data: eventDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const acceptEvent = async (req, res) => {
  try {
    const acceptedEvent = await eventService.acceptEvent(req.params.id);
    res.status(200).send({ status: "OK", data: acceptedEvent });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const rejectEvent = async (req, res) => {
  try {
    const rejectedEvent = await eventService.rejectEvent(
      req.params.id,
      req.body.observations
    );
    res.status(200).send({ status: "OK", data: rejectedEvent });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const eventController = {
  getAllEvents,
  getAllMyEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  acceptEvent,
  rejectEvent,
};
