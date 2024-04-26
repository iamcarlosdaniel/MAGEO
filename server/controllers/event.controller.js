import { eventServicie } from "../services/event.service.js";

export const getAllEvents = async (req, res) => {
  try {
    const allEvents = await eventServicie.getAllEvents();
    res.status(200).send({ status: "OK", data: allEvents });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const getOneEvent = async (req, res) => {
  try {
    const eventFound = await eventServicie.getOneEvent(req.params.id);
    res.status(200).send({ status: "OK", data: eventFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const createEvent = async (req, res) => {
  try {
    const newEvent = await eventServicie.createEvent(req.body, req.user.id);
    res.status(200).send({ status: "OK", data: newEvent });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const updateEvent = async (req, res) => {
  try {
    res.status(200).send({ status: "OK", data: data });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const deleteEvent = async (req, res) => {
  try {
    res.status(200).send({ status: "OK", data: data });
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
