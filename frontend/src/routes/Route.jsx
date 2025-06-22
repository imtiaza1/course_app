import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import EnrollCheckout from "../pages/EnrollCheckOut";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/coursedetails/:courseId" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/enroll/:courseId" element={<EnrollCheckout />} /> */}
        {/* <Route path="/checkout" element={<CheckOut />} /> */}
        {/* 🔒 Protected Routes */}
        <Route
          path="/enroll/:courseId"
          element={
            <ProtectedRoute>
              <EnrollCheckout />
            </ProtectedRoute>
          }
        />
        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routers;
