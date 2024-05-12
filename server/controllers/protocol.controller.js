import { protocolService } from "../services/protocol.service.js";

const getAllProtocols = async (req, res) => {
  try {
    const allProtocols = await protocolService.getAllProtocols();
    res.status(200).send({ status: "OK", data: allProtocols });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getAllMyProtocols = async (req, res) => {
  try {
    const allMyProtocols = await protocolService.getAllMyProtocols(req.user.id);
    res.status(200).send({ status: "OK", data: allMyProtocols });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneProtocol = async (req, res) => {
  try {
    const protocolFound = await protocolService.getOneProtocol(req.params.id);
    res.status(200).send({ status: "OK", data: protocolFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createProtocol = async (req, res) => {
  try {
    const newProtocol = await protocolService.createProtocol(
      req.body,
      req.user.id
    );
    res.status(200).send({ status: "OK", data: newProtocol });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateProtocol = async (req, res) => {
  try {
    const protocolUpdate = await protocolService.updateProtocol(
      req.params.id,
      req.body
    );
    res.status(200).send({ status: "OK", data: protocolUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteProtocol = async (req, res) => {
  try {
    const protocolDelete = await protocolService.deleteProtocol(req.params.id);
    res.status(200).send({ status: "OK", data: protocolDelete });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const acceptProtocol = async (req, res) => {
  try {
    const acceptedProtocol = await protocolService.acceptProtocol(
      req.params.id
    );

    res.status(200).send({ status: "OK", data: acceptedProtocol });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const rejectProtocol = async (req, res) => {
  try {
    const rejectedProtocol = await protocolService.rejectProtocol(
      req.params.id
    );
    res.status(200).send({ status: "OK", data: rejectedProtocol });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const protocolController = {
  getAllProtocols,
  getAllMyProtocols,
  getOneProtocol,
  createProtocol,
  updateProtocol,
  deleteProtocol,
  acceptProtocol,
  rejectProtocol,
};
