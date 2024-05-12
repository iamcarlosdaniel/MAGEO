import Event from "../database/models/event.model.js";

const getAllEvents = async () => {
  try {
    const allEvents = await Event.find()
      .populate({
        path: "user_id",
        select: "first_name last_name email campus department position",
      })
      .populate({
        path: "schedules.spectators",
        select: "title value",
      });
    return allEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyEvents = async (userId) => {
  try {
    const allMyEvents = await Event.find({ user_id: userId })
      .populate({
        path: "user_id",
        select: "first_name last_name email campus department position",
      })
      .populate({
        path: "schedules.spectators",
        select: "title value",
      });
    return allMyEvents;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneEvent = async (eventId) => {
  try {
    const eventFound = await Event.findById(eventId)
      .populate({
        path: "user_id",
        select: "first_name last_name email campus department position",
      })
      .populate({
        path: "schedules.spectators",
        select: "title value",
      });
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
      user_id: userId,
      ...eventData,
    });
    await newEvent.save();
    return newEvent;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateEvent = async (eventId, eventData) => {
  try {
    //ELIMNAR EL STATE DEL EVENTDATA
    if (eventData.state) {
      delete eventData.state;
    }
    const eventUpdate = await Event.findByIdAndUpdate(
      { _id: eventId },
      eventData,
      { new: true }
    );
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
    return { message: "Event removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const acceptEvent = async (eventId) => {
  try {
    const acceptedEvent = await Event.findByIdAndUpdate(
      { _id: eventId },
      { state: "Accept", $unset: { observations: "" } },
      { new: true }
    );
    return acceptedEvent;
  } catch (error) {
    throw new Error(error.message);
  }
};

const rejectEvent = async (eventId, eventObservations) => {
  try {
    const rejectedEvent = await Event.findByIdAndUpdate(
      { _id: eventId },
      { state: "Reject", observations: eventObservations },
      { new: true }
    );
    return rejectedEvent;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const eventService = {
  getAllEvents,
  getAllMyEvents,
  getOneEvent,
  createEvent,
  updateEvent,
  deleteEvent,
  acceptEvent,
  rejectEvent,
};
