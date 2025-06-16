import mongoose from "mongoose";

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ DB connected successfully");
  } catch (e) {
    console.error("❌ Error connecting to DB:", e.message);
  }
};

export default db;
