import express from "express";
import {
  getUser,
  logOutUser,
  registerUser,
  signInUser,
} from "../controllers/users.js";
import { loginValidate, signInValidate } from "../middleware/auth.js";
import { isAuthenticated } from "../middleware/isAuthenticated.js";

const router = express.Router();
//signup
router.post("/register", signInValidate, registerUser);
//signIn
router.post("/login", loginValidate, signInUser);
// logout user
router.post("/logout", logOutUser);

// route
router.get("/user", isAuthenticated, getUser);

export default router;
