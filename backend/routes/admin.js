import express from "express";
import {
  logOutAdmin,
  registerAdmin,
  signInAdmin,
} from "../controllers/admin.js";
import { loginValidate, signInValidate } from "../middleware/auth.js";

const router = express.Router();
//signup
router.post("/register", signInValidate, registerAdmin);
//signIn
router.get("/login", loginValidate, signInAdmin);
// logout Admin
router.get("/logout", logOutAdmin);

export default router;
