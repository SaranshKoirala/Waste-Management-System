import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoute from "./Routes/userRoute.js";
import authRoute from "./Routes/authRoute.js";
// import cors from "cors";
// import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
// app.use(express.json());
// app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("api/user", userRoute);

//Invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
