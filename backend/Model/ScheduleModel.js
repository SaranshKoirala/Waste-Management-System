import mongoose from "mongoose";

const schedulePickupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contact: {
    type: String,
    required: true,
  },
  streetName: {
    type: String,
    required: true,
  },
  wardNumber: {
    type: Number,
    required: true,
  },
  pickupDate: {
    type: String,
    required: true,
  },
  pickupTime: {
    type: String,
    enum: ["Morning", "Afternoon", "Evening"],
    default: "Morning",
  },
  wasteType: {
    type: String,
    enum: ["Biodegradable", "Non-Biodegradable"],
    default: "Biodegradable",
  },
  status: {
    type: String,
    enum: ["Confirmed", "Unconfirmed"],
    default: "Unconfirmed",
  },
});

const SchedulePickup = mongoose.model("SchedulePickup", schedulePickupSchema);

export default SchedulePickup;
