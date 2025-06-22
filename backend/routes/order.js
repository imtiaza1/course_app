import express from "express";
import {
  getUserOrders,
  isCoursePurchased,
  orderCourse,
} from "../controllers/orders.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();
router.post("/:courseId", isAuthenticated, orderCourse);
router.get("/purchasedcourses", isAuthenticated, getUserOrders);
router.get("/check/:courseId", isAuthenticated, isCoursePurchased);

export default router;
