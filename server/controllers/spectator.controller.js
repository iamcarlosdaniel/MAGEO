import { spectatorService } from "../services/spectator.service.js";

const getAllSpectators = async (req, res) => {
  try {
    const allSpectators = await spectatorService.getAllSpectators();
    res.status(200).send({ status: "OK", data: allSpectators });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMySpectators = async (req, res) => {
  try {
    const allMySpectators = await spectatorService.getAllMySpectators(
      req.user.id
    );
    res.status(200).send({ status: "OK", data: allMySpectators });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneSpectator = async (req, res) => {
  try {
    const spectatorFound = await spectatorService.getOneSpectator(
      req.params.id
    );
    res.status(200).send({ status: "OK", data: spectatorFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createSpectator = async (req, res) => {
  try {
    const newSpectator = await spectatorService.createSpectator(
      req.body,
      req.user.id
    );
    res.status(200).send({ status: "OK", data: newSpectator });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateSpectator = async (req, res) => {
  try {
    const spectatorUpdate = await spectatorService.updateSpectator(
      req.params.id,
      req.body
    );
    res.status(200).send({ status: "OK", data: spectatorUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteSpectator = async (req, res) => {
  try {
    const spectatorDelete = await spectatorService.deleteSpectator(
      req.params.id
    );
    res.status(200).send({ status: "OK", data: spectatorDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const spectatorController = {
  getAllSpectators,
  getAllMySpectators,
  getOneSpectator,
  createSpectator,
  updateSpectator,
  deleteSpectator,
};
