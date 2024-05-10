import Protocol from "../database/models/protocol.model.js";

const getAllProtocols = async () => {
  try {
    const allProtocols = await Protocol.find();
    return allProtocols;
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

const createProtocol = async (protocolData, userId) => {
  try {
    const newProtocol = new Protocol({
      master_ceremonies: protocolData.master_ceremonies,
      event_id: protocolData.event_id,
      service_requirements: protocolData.service_requirements,
      inauguration_data: protocolData.inauguration_data,
      closing_data: protocolData.closing_data,
    });
    await newProtocol.save();
    return newProtocol;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateProtocol = async (protocolId, protocolData) => {
  try {
    const {
      master_ceremonies,
      event_id,
      service_requirements,
      inauguration_data,
      closing_data,
    } = protocolData;
    const protocolUpdate = await Protocol.findByIdAndUpdate(
      {
        _id: protocolId,
      },
      {
        master_ceremonies,
        event_id,
        service_requirements,
        inauguration_data,
        closing_data,
      },
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
    return protocolDelete;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const protocolService = {
  getAllProtocols,
  getOneProtocol,
  createProtocol,
  updateProtocol,
  deleteProtocol,
};
