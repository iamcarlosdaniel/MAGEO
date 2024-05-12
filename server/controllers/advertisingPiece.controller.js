import { advertisingPieceService } from "../services/advertisingPiece.service.js";

const getAllAdvertisingPieces = async (req, res) => {
  try {
    const allAdvertisingPieces =
      await advertisingPieceService.getAllAdvertisingPieces();
    res.status(200).send({ status: "OK", data: allAdvertisingPieces });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMyAdvertisingPieces = async (req, res) => {
  try {
    const allMyAdvertisingPieces =
      await advertisingPieceService.getAllMyAdvertisingPieces(req.user.id);
    res.status(200).send({ status: "OK", data: allMyAdvertisingPieces });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneAdvertisingPiece = async (req, res) => {
  try {
    const advertisingPieceFound =
      await advertisingPieceService.getOneAdvertisingPiece(req.params.id);
    res.status(200).send({ status: "OK", data: advertisingPieceFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createAdvertisingPiece = async (req, res) => {
  try {
    const newAdvertisingPiece =
      await advertisingPieceService.createAdvertisingPiece(
        req.body,
        req.user.id
      );
    res.status(200).send({ status: "OK", data: newAdvertisingPiece });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateAdvertisingPiece = async (req, res) => {
  try {
    const advertisingPieceUpdate =
      await advertisingPieceService.updateAdvertisingPiece(
        req.params.id,
        req.body
      );
    res.status(200).send({ status: "OK", data: advertisingPieceUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: error?.message || error });
  }
};

const deleteAdvertisingPiece = async (req, res) => {
  try {
    const deleteAdvertisingPiece =
      await advertisingPieceService.deleteAdvertisingPiece(req.params.id);
    res.status(200).send({ status: "OK", data: deleteAdvertisingPiece });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const acceptAdvertisingPiece = async (req, res) => {
  try {
    const acceptedAdvertisingPiece =
      await advertisingPieceService.acceptAdvertisingPiece(req.params.id);
    res.status(200).send({ status: "OK", data: acceptedAdvertisingPiece });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const rejectAdvertisingPiece = async (req, res) => {
  try {
    const rejectedAdvertisingPiece =
      await advertisingPieceService.rejectAdvertisingPiece(
        req.params.id,
        req.body.observations
      );
    res.status(200).send({ status: "OK", data: rejectedAdvertisingPiece });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const advertisingPieceController = {
  getAllAdvertisingPieces,
  getAllMyAdvertisingPieces,
  getOneAdvertisingPiece,
  createAdvertisingPiece,
  updateAdvertisingPiece,
  deleteAdvertisingPiece,
  acceptAdvertisingPiece,
  rejectAdvertisingPiece,
};
