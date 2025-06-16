import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import db from "./config/db.js";
import adminRouter from "./routes/admin.js";
import courseRouter from "./routes/course.js";
import orderRouter from "./routes/order.js";
import userRouter from "./routes/users.js";
const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
db();

// cloudinary Configuration code
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
// Define API routes
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/admin", adminRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("✅ Server is running at", PORT));
