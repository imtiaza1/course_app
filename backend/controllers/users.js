import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/users.js";

// register user
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Validate required fields
    if (!firstName || !lastName || !email || !password) {
      return res
        .status(400)
        .json({ error: true, message: "All fields are required." });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ error: true, message: "User already exists with this email." });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    // Save to DB
    await newUser.save();

    // Remove password from response
    const userResponse = {
      _id: newUser._id,
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      email: newUser.email,
    };

    // Send success response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: userResponse,
    });
  } catch (error) {
    console.error("Error while registering user:", error.message);
    res
      .status(500)
      .json({ error: true, message: "Server error while creating user." });
  }
};
// signIn user
export const signInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ email });

    // Validate user and password
    if (!user) {
      return res.status(403).json({
        error: true,
        message: "Invalid credentials",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        error: true,
        message: "Invalid credentials",
      });
    }
    // generate jwt token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token);
    // 4. Remove password from user before sending
    const { password: _, ...userWithoutPassword } = user._doc;
    // Send success response
    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userWithoutPassword,
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
export const logOutUser = async (req, res) => {
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

// get a single user using token
export const getUser = async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId);
    res.status(200).json({ user: user });
  } catch (error) {
    res.status(401).json({
      message: "user not found",
    });
  }
};
