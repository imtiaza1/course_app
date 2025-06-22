import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Courses = () => {
  const { user } = useSelector((state) => state.auth);
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
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
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <>
      <Nav />
      <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-orange-400">
            Explore Our Courses
          </h1>

          {loading ? (
            <p className="text-center text-gray-300">Loading...</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {course.map((item) => (
                <div
                  key={item._id}
                  className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
                >
                  <img
                    src={item.image.url}
                    alt="Course"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2 text-green-400">
                      {item.title}
                    </h2>
                    <p className="text-sm text-gray-300 mb-4">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-center mt-3 gap-2">
                      {user ? (
                        <Link
                          to={`/enroll/${item._id}`}
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
                        to={`/coursedetails/${item._id}`}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
