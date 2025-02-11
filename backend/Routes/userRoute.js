import express from "express";
import User from "../model/UserModel.js";

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const users = await User.find();
    const length = users.length;
    if (length === 0) {
      return res.status(404).json({ message: "No users found!" });
    }
    res.status(200).json({ message: "Success", data: users });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    res.status(200).json({ message: "Success", data: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: "User Not Found!" });
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(400).json({ message: "User Not Found!" });

    const { name, email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, password },
      { new: true, runValidators: true }
    );

    res
      .status(200)
      .json({ message: "Updated Succesfully!", data: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default route;
