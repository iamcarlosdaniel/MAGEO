import Spectator from "../database/models/spectator.model.js";

const getAllSpectators = async () => {
  try {
    const allAssistance = await Spectator.find().populate("user_id");
    return allAssistance;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMySpectators = async (userId) => {
  try {
    const allMySpectators = await spectatorService.find({ user_id: userId });
    return allMySpectators;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneSpectator = async (spectatorId) => {
  try {
    const spectatorFound = await Spectator.findById(spectatorId).populate(
      "user_id"
    );

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
      user: userId,
      ...spectatorData,
    });
    await newSpectator.save();
    return newSpectator;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateSpectator = async (spectatorId, spectatorData) => {
  try {
    const spectatorUpdate = await Spectator.findByIdAndUpdate(
      { _id: spectatorId },
      spectatorData,
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

    return { messsage: "Spectator removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};

export const spectatorService = {
  getAllSpectators,
  getAllMySpectators,
  getOneSpectator,
  createSpectator,
  updateSpectator,
  deleteSpectator,
};
