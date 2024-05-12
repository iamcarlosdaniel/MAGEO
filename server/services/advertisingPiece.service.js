import AdvertisingPiece from "../database/models/advertisingPiece.model.js";

const getAllAdvertisingPieces = async () => {
  try {
    const allAdvertisingPieces = await AdvertisingPiece.find()
      .populate({
        path: "user_id",
        select: "first_name last_name email campus department position",
      })
      .populate({
        path: "schedules.spectators",
        select: "title value",
      });
    return allAdvertisingPieces;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyAdvertisingPieces = async (userId) => {
  try {
    const allMyAdvertisingPieces = await AdvertisingPiece.find({
      user_id: userId,
    })
      .populate({
        path: "user_id",
        select: "first_name last_name email campus department position",
      })
      .populate({
        path: "schedules.spectators",
        select: "title value",
      });
    return allMyAdvertisingPieces;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getOneAdvertisingPiece = async (advertisingPieceId) => {
  try {
    const advertisingPieceFound = await AdvertisingPiece.findById(
      advertisingPieceId
    )
      .populate({
        path: "user_id",
        select: "first_name last_name email campus department position",
      })
      .populate({
        path: "schedules.spectators",
        select: "title value",
      });
    if (!advertisingPieceFound) {
      throw new Error("Advertising Piece not found");
    }
    return advertisingPieceFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createAdvertisingPiece = async (advertisingPieceData, userId) => {
  try {
    const newAdvertisingPiece = new AdvertisingPiece({
      user_id: userId,
      ...advertisingPieceData,
    });
    await newAdvertisingPiece.save();
    return advertisingPieceData;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateAdvertisingPiece = async (
  advertisingPieceId,
  advertisingPieceData
) => {
  try {
    if (advertisingPieceData.state) {
      delete advertisingPieceData.state;
    }
    const advertisingPieceUpdate = await AdvertisingPiece.findByIdAndUpdate(
      { _id: advertisingPieceId },
      advertisingPieceData,
      { new: true }
    );
    return advertisingPieceUpdate;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteAdvertisingPiece = async (advertisingPieceId) => {
  try {
    const advertisingPieceDelete = await AdvertisingPiece.findByIdAndDelete(
      advertisingPieceId
    );
    if (!advertisingPieceDelete) {
      throw new Error("Advertising Piece not found");
    }
    return { message: "Advertising Piece removed correctly" };
  } catch (error) {
    throw new Error(error.message);
  }
};

const acceptAdvertisingPiece = async (advertisingPieceId) => {
  try {
    const acceptedAdvertisingPiece = await AdvertisingPiece.findByIdAndUpdate(
      { _id: advertisingPieceId },
      { state: "Accept", $unset: { observations: "" } },
      { new: true }
    );
    return acceptedAdvertisingPiece;
  } catch (error) {
    throw new Error(error.message);
  }
};

const rejectAdvertisingPiece = async (
  advertisingPieceId,
  advertisingPieceObservations
) => {
  try {
    const rejectedAdvertisingPiece = await AdvertisingPiece.findByIdAndUpdate(
      { _id: advertisingPieceId },
      { state: "Reject", observations: advertisingPieceObservations },
      { new: true }
    );
    return rejectedAdvertisingPiece;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const advertisingPieceService = {
  getAllAdvertisingPieces,
  getAllMyAdvertisingPieces,
  getOneAdvertisingPiece,
  createAdvertisingPiece,
  updateAdvertisingPiece,
  deleteAdvertisingPiece,
  acceptAdvertisingPiece,
  rejectAdvertisingPiece,
};
