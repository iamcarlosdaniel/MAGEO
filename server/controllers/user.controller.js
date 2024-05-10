import { userService } from "../services/user.service.js";

const getUserInformation = async (req, res) => {
  try {
    const userFound = await userService.getUserInformation(req.params.id);
    res.status(200).send({ status: "OK", data: userFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getMyUserInformation = async (req, res) => {
  try {
    const userFound = await userService.getMyUserInformation(req.user.id);
    res.status(200).send({ status: "OK", data: userFound });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateMyUserInformation = async (req, res) => {
  try {
    const userUpdate = await userService.updateMyUserInformation(
      req.user.id,
      req.body
    );
    res.status(200).send({ status: "OK", data: userUpdate });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const userController = {
  getUserInformation,
  getMyUserInformation,
  updateMyUserInformation,
};
