import User from "../database/models/user.model.js";

const getUser = async (userId) => {
  try {
    const userFound = await User.findById(userId).select("-password");
    return userFound;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (
  userId,
  username,
  role,
  first_name,
  last_name,
  email,
  password,
  phone,
  date_of_birth,
  gender,
  campus,
  department,
  position
) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      {
        username,
        role,
        first_name,
        last_name,
        email,
        password,
        phone,
        date_of_birth,
        gender,
        campus,
        department,
        position,
      },
      { new: true }
    );
    return updatedUser;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (userId) => {
  try {
    const userDeleted = await User.findByIdAndDelete(userId);
    return userDeleted;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const userService = {
  getUser,
  updateUser,
  deleteUser,
};
