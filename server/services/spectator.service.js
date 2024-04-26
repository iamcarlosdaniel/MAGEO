import Spectator from "../database/models/spectator.model.js";

const getAllSpectators = async () => {
  try {
    const allAssistance = await Spectator.find();
    return allAssistance;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneSpectator = async (spectatorId) => {
  try {
    const spectatorFound = await Spectator.findById(spectatorId);
    if (!spectatorFound) {
      throw new Error("Spectator not found");
    }

    return spectatorFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createSpectator = async (spectatorData, userId) => {
  try {
    const newSpectator = new Spectator({
      title: spectatorData.title,
      value: spectatorData.value,
      user: userId,
    });
    await newSpectator.save();
    return newSpectator;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateSpectator = async (spectatorId, spectatorData) => {
  try {
    const { title, value } = spectatorData;
    const spectatorUpdate = await Spectator.findByIdAndUpdate(
      { _id: spectatorId },
      { title, value },
      { new: true }
    );
    return spectatorUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteSpectator = async (spectatorId) => {
  try {
    const spectatorDelete = await Spectator.findByIdAndDelete(spectatorId);
    if (!spectatorDelete) {
      throw new Error("Spectator not found");
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export const spectatorService = {
  getAllSpectators,
  getOneSpectator,
  createSpectator,
  updateSpectator,
  deleteSpectator,
};
