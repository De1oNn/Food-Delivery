import { UserModel } from "../../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { password } = req.body;
    const updatedPassword = password;

    const newUser = await UserModel.create({
      ...req.body,
      password: updatedPassword,
    });
    res.send({ message: "User created successfully", newUser });
  } catch (error) {
    res.json(error);
  }
};
