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
    const deleteEvent = await eventService.deleteEvent(req.params.id);
    res.status(200).send({ status: "OK", data: deleteEvent });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const eventController = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
