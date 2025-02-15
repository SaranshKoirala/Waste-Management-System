import express from "express";
import validator from "validator";
import User from "../model/UserModel.js";
import bcrypt from "bcryptjs";
import tokenAuth from "../middleware/tokenAuth.js";
import SchedulePickup from "../model/ScheduleModel.js";

const route = express.Router();

route.get("/", tokenAuth, (req, res) => {
  try {
    const { name, email } = req.user;
    res
      .status(200)
      .json({ message: "User is Verified!!", user: { name, email } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//schedule route
route.post("/schedulepickup", tokenAuth, async (req, res) => {
  try {
    if (!req.user) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No user data found" });
    }
    const { name, email } = req.user;

    const {
      contact,
      streetName,
      wardNumber,
      pickupDate,
      pickupTime,
      wasteType,
    } = req.body;

    if (
      !name ||
      !email ||
      !contact ||
      !streetName ||
      !wardNumber ||
      !pickupDate ||
      !pickupTime ||
      !wasteType
    ) {
      return res.status(400).json({ message: "Enter full details!" });
    }

    await SchedulePickup.create({
      name,
      email,
      contact,
      streetName,
      wardNumber,
      pickupDate,
      pickupTime,
      wasteType,
    });
    res.status(201).json({ message: "Pickup is scheduled!" });
  } catch (error) {
    console.error("Error scheduling pickup:", error);
    res.status(500).json({ message: "Couldn't schedule your pickup!" });
  }
});

route.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    //checking if email or password is sent by the user or not
    if (!email || !password)
      return res
        .status(400)
        .json({ message: "Email and password are required!" });

    const user = await User.findOne({ email });

    //checking for the valid user
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    //checking if the password is valid
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    //token generate
    const token = await user.generateAuthToken();

    //cookie generate
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000, //15min in milliseconds
      sameSite: "None",
    });

    res.status(200).json({
      message: "Login successful!",
      token,
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.post("/signup", async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;
    if (!name || !email || !password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    //password must be at least of 6 characters
    if (password.length < 6)
      return res.status({ message: "Password must be at least 6 characters!" });

    //checking if the password and confirm password match or not
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password do not match!" });
    }

    // Validate email with validator.js
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format." });
    }

    //user is created
    await User.create({ name, email, password });
    res.status(201).json({ message: "User is Created." });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "Email already exist!" });
    }
    res.status(500).json({ message: "Internal server error!" });
  }
});

export default route;
