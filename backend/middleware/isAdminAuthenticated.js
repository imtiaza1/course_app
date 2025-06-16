import jwt from "jsonwebtoken";
export const isAdminAuthenticated = async (req, res, next) => {
  const token = req.cookies.admin_token;

  if (!token) {
    // If token is invalid/expired
    return res.status(401).json({
      success: false,
      message: "Invalid session. Please log in again.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_ADMIN);
    req.admin = decoded;
    next();
  } catch (error) {
    // If token is invalid/expired
    return res.status(401).json({
      success: false,
      message: "Invalid session. Please log in again.",
    });
  }
};
