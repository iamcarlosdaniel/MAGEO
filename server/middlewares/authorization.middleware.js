import User from "../database/models/user.model.js";

export const authorizationRequired = async (req, res, next) => {
  try {
    const userFound = await User.findById(req.user.id);
    if (!userFound || !userFound.role.includes("Admin")) {
      return res.status(403).send({
        status: "FAILED",
        data: {
          error: "Access denied. You do not have the necessary permissions.",
        },
      });
    }
    next();
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
