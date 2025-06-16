import express from "express";
import {
  createCourse,
  deleteCourse,
  getAllCourse,
  getCourseDetails,
  updateCourse,
} from "../controllers/course.js";
import { isAdminAuthenticated } from "../middleware/isAdminAuthenticated.js";

const router = express.Router();
//create
router.post("/create", isAdminAuthenticated, createCourse);
//update
router.put("/update/:courseId", isAdminAuthenticated, updateCourse);
// delete
router.delete("/delete/:courseId", isAdminAuthenticated, deleteCourse);
//gell all course
router.get("/courses", getAllCourse);
// get course details
router.get("/:courseId", getCourseDetails);

export default router;
