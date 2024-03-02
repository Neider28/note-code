import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_URI_DB || "ERROR", {
      ssl: true,
      dbName: "note-code-db",
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
