import express from "express";
import SchedulePickup from "../model/ScheduleModel.js";

const route = express.Router();

route.get("/", async (req, res) => {
  try {
    const { status } = req.query;
    let filter = {};

    if (status) {
      // filter.status = { $regex: new RegExp(`^${status}$`, "i") };
      filter.status = status;
    }

    const schedulePickups = await SchedulePickup.find(filter);
    const length = schedulePickups.length;
    if (length === 0) {
      return res
        .status(200)
        .json({ message: "No Schedule found!", data: null });
    }
    res.status(200).json({ message: "Success", data: schedulePickups });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const schedulePickup = await SchedulePickup.findById(req.params.id);
    if (!schedulePickup) {
      return res.status(404).json({ message: "User Not Found!" });
    }
    res.status(200).json({ message: "Success", data: schedulePickup });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Server Error!" });
  }
});

route.delete("/:id", async (req, res) => {
  try {
    const schedulePickup = await SchedulePickup.findById(req.params.id);
    if (!schedulePickup)
      return res.status(400).json({ message: "Schedule Not Found!" });
    await SchedulePickup.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Schedule deleted sucessfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

route.put("/:id", async (req, res) => {
  try {
    const schedulePickup = await SchedulePickup.findById(req.params.id);
    if (!schedulePickup)
      return res.status(400).json({ message: "Schedule Not Found!" });

    const {
      contact,
      streetName,
      wardNumber,
      pickupDate,
      pickupTime,
      wasteType,
    } = req.body;
    const updatedSchedule = await SchedulePickup.findByIdAndUpdate(
      req.params.id,
      { contact, streetName, wardNumber, pickupTime, pickupDate, wasteType },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      message: "Schedule Updated Succesfully!",
      data: updatedSchedule,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default route;
