import Event from "../database/models/event.model.js";
import advertisingPiece from "../database/models/advertisingPiece.model.js";

const checkDeadlineProximity = async (req, res, next) => {
  try {
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const checkApproved = async (req, res, next) => {
  try {
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const restrictions = {
  checkDeadlineProximity,
  checkApproved,
};
