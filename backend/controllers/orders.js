import { Course } from "../models/course.js";
import { Order } from "../models/orders.js";

// Controller to handle course purchase
export const orderCourse = async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user?.id; // ✅ Extract user ID from req.user
  try {
    // ✅ 1. Check if the course exists
    const course = await Course.findOne({ _id: courseId });
    if (!course) {
      return res.status(404).json({
        error: true,
        message: "Course not found. Please refresh the page.",
      });
    }

    // ✅ 2. Check if the user already bought the course
    const existingOrder = await Order.findOne({ courseId, userId });
    if (existingOrder) {
      return res.status(400).json({
        error: true,
        message: "You already purchased this course",
      });
    }

    // ✅ 3. Create a new order
    const newOrder = new Order({ courseId, userId });
    await newOrder.save();

    // ✅ 4. Send success response
    return res.status(201).json({
      success: true,
      message: "Course purchased successfully",
      order: newOrder,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Something went wrong. Please try again later. ",
    });
  }
};

// Get all courses purchased by the user
export const getUserOrders = async (req, res) => {
  const userId = req.user.id;
  try {
    // Find all orders made by the user
    const purchasedCourses = await Order.find({ userId: userId });

    // Extract all purchased course IDs into an array
    let purchasedCourseId = [];
    for (let i = 0; i < purchasedCourses.length; i++) {
      purchasedCourseId.push(purchasedCourses[i].courseId);
    }

    // Find all course details using the extracted course IDs
    const purchasedCourse = await Course.find({ _id: purchasedCourseId });

    // Send response with purchased course data
    res.status(200).json({
      purchasedCourse,
    });
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Failed to fetch purchased courses. Please try again later.",
    });
  }
};
// check if course already but it or not
export const isCoursePurchased = async (req, res) => {
  const { courseId } = req.params;
  const userId = req.user?.id;

  try {
    const existingOrder = await Order.findOne({ courseId, userId }); // ✅ include userId
    if (existingOrder) {
      return res.status(200).json({
        purchased: true,
      });
    } else {
      return res.status(200).json({
        purchased: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      error: true,
      message: "Error checking course purchase",
    });
  }
};
