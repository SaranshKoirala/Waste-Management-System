import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(import.meta.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    import.meta.env.exit(1);
  }
};

export default connectDB;
