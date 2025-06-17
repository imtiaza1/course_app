import express from "express";
import { logOutUser, registerUser, signInUser } from "../controllers/users.js";
import { loginValidate, signInValidate } from "../middleware/auth.js";

const router = express.Router();
//signup
router.post("/register", signInValidate, registerUser);
//signIn
router.post("/login", loginValidate, signInUser);
// logout user
router.post("/logout", logOutUser);

export default router;
