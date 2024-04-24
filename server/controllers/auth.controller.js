import { authService } from "../services/auth.service.js";

const register = async (req, res) => {
  try {
    const userData = req.body;
    const { user, token } = await authService.register(userData);

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    //res.status(200).send({ status: "OK", data: userData });
    res.status(200).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await authService.login(email, password);

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    //res.status(200).send({ status: "OK", data: user });
    res.status(200).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    await authService.logout(token);
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const authStatus = async (req, res) => {
  try {
    const { token } = req.cookies;
    const user = await authService.authStatus(token);

    //res.status(200).send({ status: "OK", data: user });
    res.status(200).send({ status: "OK", data: "Authorized" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const authController = {
  register,
  login,
  logout,
  authStatus,
};
