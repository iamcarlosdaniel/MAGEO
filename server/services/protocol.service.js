import Protocol from "../database/models/protocol.model.js";

const getAllProtocols = async () => {
  try {
    const allProtocols = await Protocol.find();
    return allProtocols;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyProtocols = async (userId) => {
  try {
    const allMyProtocols = await Logistic.find({ user_id: userId });
    return allMyProtocols;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getOneProtocol = async (protocolId) => {
  try {
    const protocolFound = await Protocol.findById(protocolId);
    if (!protocolFound) {
      throw new Error("Protocol not found");
    }
    return protocolFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createProtocol = async (protocolData) => {
  try {
    const newProtocol = new Protocol({
      ...protocolData,
    });
    await newProtocol.save();
    return newProtocol;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProtocol = async (protocolId, protocolData) => {
  try {
    const protocolUpdate = await Protocol.findByIdAndUpdate(
      {
        _id: protocolId,
      },
      protocolData,
      { new: true }
    );
    return protocolUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteProtocol = async (protocolId) => {
  try {
    const protocolDelete = await Protocol.findByIdAndDelete(protocolId);
    if (!protocolDelete) {
      throw new Error("Protocol not fount");
    }
    return { message: "Protocol removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const acceptProtocol = async (protocolId) => {
  try {
    const acceptedProtocol = await Protocol.findByIdAndUpdate(
      { _id: protocolId },
      { state: "Accept", $unset: { observation: "" } },
      { new: true }
    );
    return acceptedProtocol;
  } catch (error) {
    throw new Error(error.message);
  }
};

const rejectProtocol = async (protocolId) => {
  try {
    const rejectedProtocol = await Protocol.findByIdAndUpdate(
      { _id: protocolId },
      { state: "Reject", $unset: { observation: "" } },
      { new: true }
    );
    return rejectedProtocol;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const protocolService = {
  getAllProtocols,
  getAllMyProtocols,
  getOneProtocol,
  createProtocol,
  updateProtocol,
  deleteProtocol,
  acceptProtocol,
  rejectProtocol,
};
