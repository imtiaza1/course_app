// src/components/FeaturedCourses.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Loader from "./Loader";

const FeaturedCourses = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useSelector((state) => state.auth);
  // Fetching course
  const getCourse = async () => {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/v1/course/courses"
      );
      setCourse(res.data.course || []);
    } catch (error) {
      console.error("Course fetch error:", error.message);
    } finally {
      setLoading(false);
    }
  };

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  useEffect(() => {
    setTimeout(() => {
      getCourse();
    }, 3000);
  }, []);

  return (
    <section className=" px-4 container mx-auto relative bg-gradient-to-r from-black to-blue-950 rounded-xl">
      <h2 className="text-3xl font-bold mb-10 text-center text-white">
        Featured Courses
      </h2>
      {loading ? (
        <Loader />
      ) : (
        <div className="slider-container w-full ">
          <Slider {...settings}>
            {course.map((course) => (
              <div key={course._id} className="px-2">
                <div className="bg-zinc-900  rounded-xl shadow-md hover:scale-105 transition-transform h-full">
                  <img
                    src={
                      course.image?.url || "https://via.placeholder.com/300x200"
                    }
                    alt="Course"
                    className="rounded-lg mb-3 w-full h-36 object-cover" // 👈 smaller image
                  />
                  <div className="p-4 pt-1 text-center">
                    <h3 className="text-lg font-semibold text-orange-400 leading-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {course.description?.slice(0, 80)}...
                    </p>
                    <div className="flex items-center justify-center mt-3 gap-2">
                      {user ? (
                        <Link
                          to={`/enroll/${course._id}`}
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                        >
                          Enroll
                        </Link>
                      ) : (
                        <button
                          onClick={() =>
                            toast.error(
                              "Please log in to access the enroll page"
                            )
                          }
                          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                        >
                          Enroll
                        </button>
                      )}
                      <Link
                        to={`/coursedetails/${course._id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default FeaturedCourses;
