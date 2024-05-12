import { logisticService } from "../services/logistic.service.js";

const getAllLogistic = async (req, res) => {
  try {
    const allLogistics = await logisticService.getAllLogistics();
    res.status(200).send({ status: "OK", data: allLogistics });
  } catch (error) {
    res
      .status(error?.status || 500)
      .sed({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMyLogistics = async (req, res) => {
  try {
    const allMyLogistics = await logisticService.getAllMyLogistics(res.user.id);
    res.status(200).send({ status: "OK", data: allMyLogistics });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneLogistic = async (req, res) => {
  try {
    const logisticFound = await logisticService.getOneLogistic(req.params.id);
    res.status(200).send({ status: "OK", data: logisticFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createLogistic = async (req, res) => {
  try {
    const newLogistic = await logisticService.createLogistic(
      req.body,
      req.user.id
    );
    res.status(200).send({ status: "OK", data: newLogistic });
  } catch (error) {
    res
      .status(error?.status || 500)
      .res({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateLogistic = async (req, res) => {
  try {
    const logisticUpdate = await logisticService.updateLogistic(
      req.params.id,
      req.body
    );
    res.status(200).send({ status: "OK", data: logisticUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteLogistic = async (req, res) => {
  try {
    const logisticDelete = await logisticService.deleteLogistic(req.params.id);
    res.status(200).send({ status: "OK", data: logisticDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const acceptLogistic = async (req, res) => {
  try {
    const acceptedLogistic = await logisticService.acceptLogistic(
      req.params.id
    );
    res.status(200).send({ status: "OK", data: acceptedLogistic });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const rejectLogistic = async (req, res) => {
  try {
    const rejectedLogistic = await logisticService.rejectLogistic(
      req.params.id
    );
    res.status(200).send({ status: "OK", data: rejectedLogistic });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const logisticController = {
  getAllLogistic,
  getAllMyLogistics,
  getOneLogistic,
  createLogistic,
  updateLogistic,
  deleteLogistic,
  acceptLogistic,
  rejectLogistic,
};
