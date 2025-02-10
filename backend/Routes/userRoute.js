import express from "express";
import User from "../Model/UserModel.js";

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

route.post("/");

export default route;
