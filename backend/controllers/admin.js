import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.js";

// register admin
export const registerAdmin = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "All fields are required." });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({
        error: true,
        message: "Admin already exists with this email.",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const newAdmin = new Admin({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save to DB
    await newAdmin.save();
    // Send success response
    res.status(201).json({
      success: true,
      message: "admin created successfully",
    });
  } catch (error) {
    console.error("Error while registering user:", error.message);
    res
      .status(500)
      .json({ error: true, message: "Server error while creating admin." });
  }
};
// signIn admin
export const signInAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if admin exists
    const admin = await Admin.findOne({ email });

    // Validate Admin and password
    if (!admin) {
      return res.status(403).json({
        error: true,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        error: true,
        message: "Invalid credentials",
      });
    }
    // generate jwt token
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET_ADMIN);
    res.cookie("admin_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    // Send success response
    res.status(200).json({
      success: true,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      error: true,
      message: "Server error during login",
    });
  }
};

//logout user
export const logOutAdmin = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      success: true,
      message: "logout successfully",
    });
  } catch (error) {
    res.status(400).json({
      error: true,
      message: "error while logout user",
    });
  }
};
