import User from "../database/models/user.model.js";

const getUserInformation = async (userId) => {
  try {
    const userFound = await User.findById(userId).select(
      "-password -date_of_birth -gender"
    );
    return userFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const getMyUserInformation = async (userId) => {
  try {
    const userFound = await User.findById(userId).select("-password");
    return userFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateMyUserInformation = async (userId, userData) => {
  try {
    const username = userData.username;
    const usernameFound = await User.findOne({ username });
    if (usernameFound) {
      throw new Error(
        `I'm sorry, but the username ${usernameFound.username} is already in use.`
      );
    }

    if (userData.role) {
      throw new Error("Sorry, you can't change your user role.");
    }

    if (userData.email) {
      throw new Error(
        "Sorry, you can't update your email for security reasons."
      );
    }

    if (userData.password) {
      throw new Error(
        "Sorry, you cannot update your password for security reasons from this section."
      );
    }
    const updatedUser = await User.findOneAndUpdate({ _id: userId }, userData, {
      new: true,
    }).select("-password");
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userService = {
  getUserInformation,
  getMyUserInformation,
  updateMyUserInformation,
};
