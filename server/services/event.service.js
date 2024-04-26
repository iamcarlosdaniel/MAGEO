import Event from "../database/models/event.model.js";

const getAllEvents = async () => {
  try {
    const allEvents = await Event.find();
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneEvent = async (eventId) => {
  try {
    const eventFound = await Event.findById(eventId);
    if (!eventFound) {
      throw new Error("Event not found");
    }

    return eventFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createEvent = async (eventData, userId) => {
  try {
    const newEvent = new Event({
      user: userId,
      event_name: eventData.event_name,
      event_description: eventData.event_description,
      area: eventData.area,
      schedules: eventData.schedules,
      registration_link: eventData.registration_link,
      attendance_control: eventData.attendance_control,
      priority: eventData.priority,
    });
    await newEvent.save();
    return newEvent;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateEvent = async (userId, eventData) => {
  try {
    const eventUpdate = await Event.findByIdAndUpdate({});
    return eventUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteEvent = async (eventId) => {
  try {
    const eventDelete = await Event.findByIdAndDelete(eventId);
    if (!eventDelete) {
      throw new Error("Event not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const eventServicie = {
  getAllEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
};
