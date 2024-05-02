import User from "../model/user.js";
import { hashPassword } from "./../helper/auth_helper.js";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username == "" ||
    email == "" ||
    password == ""
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const hashedPassword = hashPassword(password);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "sign up successfully" });
  } catch (e) {
    res.status(400).json({ message: e.toString() });
  }
};
