import { v2 as cloudinary } from "cloudinary";
import { Course } from "../models/course.js";

// creating courses
export const createCourse = async (req, res) => {
  const adminId = req.admin.id;
  const { title, description, price } = req.body;
  const { image } = req.files;
  try {
    if (!title || !description || !price || !image) {
      return res.status(400).json({
        success: false,
        message: "All Field required",
      });
    }
    if (!req.files || Object.keys(req.files).length === 0) {
      res.status(400).json({
        error: "no file uploaded",
      });
    }
    const allowedFile = ["image/png", "image/jpeg"];
    if (!allowedFile.includes(image.mimetype)) {
      return res.status(400).json({
        error: "invalid file format. only jpg and png are allowed",
      });
    }
    // saved img to cloudinary
    const cloud_res = await cloudinary.uploader.upload(image.tempFilePath);
    if (!cloud_res || cloud_res.error) {
      res.status(400).json({
        error: "Error uploading file to cloudinary",
      });
    }
    const course = await Course.create({
      title,
      description,
      price,
      image: {
        public_id: cloud_res.public_id,
        url: cloud_res.url,
      },
      adminId,
    });
    res.status(200).json({
      success: true,
      message: "course create successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Errorr while create course",
      error: `${error}`,
    });
  }
};

// updating course
export const updateCourse = async (req, res) => {
  const adminId = req.admin.id;
  const { courseId } = req.params;
  const { title, description, price } = req.body;

  try {
    //check course exist in db
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }
    // // 2. Check if current admin is the creator
    if (course.adminId.toString() !== adminId) {
      return res.status(401).json({
        error: true,
        message:
          "This course was created by another admin, so you cannot update it!",
      });
    }
    // check if new image is uploaded
    if (req.files && req.files.image) {
      const image = req.files.image;
      const allowedFile = ["image/png", "image/jpeg"];
      // check valid file type
      if (!allowedFile.includes(image.mimetype)) {
        return res.status(400).json({
          error: "Invalid file format. Only jpg and png are allowed",
        });
      }
      // delete previous img from cloudinary
      if (course.image && course.image.public_id) {
        await cloudinary.uploader.destroy(course.image.public_id);
      }
      // upload a new image
      const cloud_response = await cloudinary.uploader.upload(
        image.tempFilePath
      );
      // if threw error while update a file
      if (!cloud_response || cloud_response.error)
        return res.status(400).json({ error: `error updating image ${error}` });
      // set public_id and url in image
      course.image = {
        public_id: cloud_response.public_id,
        url: cloud_response.secure_url,
      };
    }
    // update other fields
    if (title) course.title = title;
    if (description) course.description = description;
    if (price) course.price = price;

    // Save the updated course
    const updatedCourse = await course.save();

    // show success message
    res.status(200).json({
      success: true,
      message: "Course updated successfully",
      course: updatedCourse,
    });
  } catch (error) {
    res.status(500).json({ error: `error while updating course ${error}` });
  }
};

// delete course

export const deleteCourse = async (req, res) => {
  const adminId = req.admin.id;
  try {
    if (req.params && req.params.courseId) {
      const { courseId } = req.params;

      // 1. Find course first
      const course = await Course.findById(courseId);
      if (!course) return res.status(400).json({ error: "Course not found" });

      // 2. Check if current admin is the creator
      if (course.adminId.toString() !== adminId) {
        return res.status(401).json({
          error: true,
          message:
            "This course was created by another admin, so you cannot delete it!",
        });
      }

      // 3. Delete the image from cloudinary
      await cloudinary.uploader.destroy(course.image.public_id);

      // 4. Now delete the course
      await Course.findByIdAndDelete(courseId);

      res.status(200).json({
        success: true,
        message: "Course deleted successfully",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: `ERROR while deleting course:`,
    });
  }
};

// get course
export const getAllCourse = async (req, res) => {
  try {
    const course = await Course.find();
    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({ error: "error while fetching course" });
  }
};

//// get course details
export const getCourseDetails = async (req, res) => {
  const { courseId } = req.params;
  if (!courseId) {
    res.status(400).json({
      error: true,
      message: "Course not found!",
    });
  }
  try {
    const course = await Course.findById(courseId);
    res.status(200).json({
      course,
    });
  } catch (error) {
    res.status(500).json({ error: "error while fetching course" });
  }
};
