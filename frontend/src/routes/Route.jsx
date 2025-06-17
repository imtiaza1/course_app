import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import CheckOut from "../pages/CheckOut";
import Contact from "../pages/Contact";
import CourseDetails from "../pages/CourseDetails";
import Courses from "../pages/Courses";
import Enroll from "../pages/Enroll";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import SignUp from "../pages/SignUp";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/coursedetails" element={<CourseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/enroll" element={<Enroll />} />
        <Route path="/checkout" element={<CheckOut />} />
        {/* Catch-all 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routers;
