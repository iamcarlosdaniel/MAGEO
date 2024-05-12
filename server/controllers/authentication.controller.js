import { authenticationService } from "../services/authentication.service.js";

const register = async (req, res) => {
  try {
    const userData = req.body;
    const { token } = await authenticationService.register(userData);

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    res.status(200).send({
      status: "OK",
      data: {
        message: "Congratulations! Your account has been successfully created.",
      },
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { token } = await authenticationService.login(email, password);

    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
      httpOnly: false,
    });

    res.status(200).send({
      status: "OK",
      data: { message: "Login successful. Welcome back!" },
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    await authenticationService.logout(token);

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(200).send({
      status: "OK",
      data: { message: "Logout successful. See you soon!" },
    });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const authStatus = async (req, res) => {
  try {
    const authStatus = await authenticationService.authStatus(req.user.id);
    res
      .status(200)
      .send({
        status: "OK",
        data: { message: "Authentication", user: authStatus },
      });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

export const authenticationController = {
  register,
  login,
  logout,
  authStatus,
};
