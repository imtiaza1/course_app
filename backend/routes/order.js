import express from "express";
import { getUserOrders, orderCourse } from "../controllers/orders.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();
router.post("/:courseId", isAuthenticated, orderCourse);
router.get("/purchasedcourses", isAuthenticated, getUserOrders);

export default router;
