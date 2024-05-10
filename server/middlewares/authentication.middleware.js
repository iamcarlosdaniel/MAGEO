import jwt from "jsonwebtoken";
import Session from "../database/models/session.model.js";
import { TOKEN_SECRET } from "../config.js";

export const authenticationRequired = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token)
      return res.status(401).send({
        status: "FAILED",
        data: { message: "No token, authorization denied" },
      });

    const SessionFound = await Session.findOne({ access_token: token });

    if (!SessionFound)
      return res
        .status(401)
        .send({ status: "FAILED", data: { message: "Session not Found" } });

    jwt.verify(token, TOKEN_SECRET, (error, user) => {
      if (error) {
        return res
          .status(401)
          .send({ status: "FAILED", data: { message: "Token is not valid" } });
      }
      req.user = user;
      next();
    });
  } catch (error) {
    return res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};
