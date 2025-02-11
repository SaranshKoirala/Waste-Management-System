import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import cors from "cors";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/user", UserRoute);
app.use("/api/auth", AuthRoute);

//Invalid routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found!" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
