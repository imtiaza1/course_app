// middlewares/validate.js
import { z } from "zod";
// register
export const signInValidate = (req, res, next) => {
  const schema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  try {
    schema.parse(req.body); // ✅ Zod's correct validation method
    next(); // continue to controller
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.errors?.[0]?.message || "Validation failed",
    });
  }
};

// login
export const loginValidate = (req, res, next) => {
  const schema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  try {
    schema.parse(req.body); // ✅ Zod's correct validation method
    next(); // continue to controller
  } catch (err) {
    return res.status(400).json({
      error: true,
      message: err.errors?.[0]?.message || "Validation failed",
    });
  }
};
