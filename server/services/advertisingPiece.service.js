import AdvertisingPiece from "../database/models/advertisingPiece.model.js";

const getAllAdvertisingPieces = async () => {
  try {
    const allAdvertisingPieces = await AdvertisingPiece.find();
    return allAdvertisingPieces;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getAllMyAdvertisingPieces = async (userId) => {
  try {
    const allMyAdvertisingPieces = await AdvertisingPiece.find({
      user_id: userId,
    }).populate("user_id");
    return allMyAdvertisingPieces;
  } catch (error) {
    throw new Error(error.message);
  }
};
const getOneAdvertisingPiece = async (advertisingPieceId) => {
  try {
    const advertisingPieceFound = await AdvertisingPiece.findById(
      advertisingPieceId
    );
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
};
