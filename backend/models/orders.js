import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
  },
  courseId: {
    type: mongoose.Types.ObjectId,
    ref: "Course",
  },
});
export const Order = mongoose.model("Orders", orderSchema);
