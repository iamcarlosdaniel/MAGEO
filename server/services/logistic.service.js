import logisticModel from "../database/models/logistic.model.js";
import Logistic from "../database/models/logistic.model.js";

const getAllLogistics = async () => {
  try {
    const allLogistics = await Logistic.find();
    return allLogistics;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyLogistics = async (userId) => {
  try {
    const allMyLogistics = await Logistic.find({ user_id: userId }).populate(
      "event_id"
    );
    return allMyLogistics;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneLogistic = async (logisticId) => {
  try {
    const logisticFound = await Logistic.findById(logisticId);
    return logisticFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createLogistic = async (logisticData) => {
  try {
    const newLogistic = new Logistic({
      ...logisticData,
    });
    await newLogistic.save();
    return newLogistic;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateLogistic = async (logisticId, logisticData) => {
  try {
    const logisticUpdate = await Logistic.findByIdAndUpdate(
      { _id: logisticId },
      logisticData,
      { new: true }
    );
    return logisticUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteLogistic = async (logisticId) => {
  try {
    const logisticDelete = await Logistic.findByIdAndDelete(logisticId);
    if (!logisticDelete) {
      throw new Error("Logistic not found");
    }
    return { message: "Logistic removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const acceptLogistic = async (logisticId) => {
  try {
    const acceptedLogistic = await Logistic.findByIdAndUpdate(
      { _id: logisticId },
      { state: "Accept", $unset: { observations: "" } },
      { new: true }
    );
    return acceptedLogistic;
  } catch (error) {
    throw new Error(error.message);
  }
};

const rejectLogistic = async (logisticId) => {
  try {
    const rejectedLogistic = await Logistic.findByIdAndUpdate(
      { _id: logisticId },
      { state: "Reject", $unset: { observations: "" } },
      { new: true }
    );
    return rejectedLogistic;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logisticService = {
  getAllLogistics,
  getAllMyLogistics,
  getOneLogistic,
  createLogistic,
  updateLogistic,
  deleteLogistic,
  acceptLogistic,
  rejectLogistic,
};
