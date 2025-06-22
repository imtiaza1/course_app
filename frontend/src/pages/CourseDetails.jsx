import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const CourseDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const [course, setCourse] = useState("");
  const { courseId } = useParams();
  const coursedetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/course/${courseId}`
      );
      setCourse(response.data.course);
    } catch (error) {
      console.log(error.response || error.response.data);
    }
  };

  useEffect(() => {
    coursedetails();
  }, [courseId]);
  return (
    <>
      <Nav />
      <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {course && course.image && (
              <img
                src={course.image.url}
                alt="Course"
                className="rounded-xl shadow-lg w-full md:w-1/2"
              />
            )}
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-orange-400 mb-4">
                {course.title}
              </h1>
              <p className="text-gray-300 mb-6">{course.description}</p>
              <ul className="text-gray-400 list-disc ml-5 space-y-1 mb-6">
                <li>20+ hours of content</li>
                <li>Lifetime access</li>
                <li>Certificate of completion</li>
                <li>Downloadable resources</li>
                <li>{course.price}</li>
              </ul>
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
                    toast.error("Please log in to access the enroll page")
                  }
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1.5 rounded text-xs font-medium transition"
                >
                  Enroll
                </button>
              )}
            </div>
          </div>

          {/* What You’ll Learn */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-orange-400">
              What You’ll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <ul className="list-disc text-gray-300 ml-5 space-y-2">
                <li>JSX and rendering elements</li>
                <li>Component structure and props</li>
                <li>React hooks (useState, useEffect)</li>
                <li>Handling user events</li>
              </ul>
              <ul className="list-disc text-gray-300 ml-5 space-y-2">
                <li>Managing state across components</li>
                <li>Building forms and validations</li>
                <li>Routing with React Router</li>
                <li>Best practices for clean code</li>
              </ul>
            </div>
          </div>

          {/* Instructor Info */}
          <div className="mt-16 bg-zinc-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold text-green-400 mb-2">
              About the Instructor
            </h3>
            <p className="text-gray-300">
              John Doe is a full-stack developer with 10+ years of experience.
              He's taught over 50,000 students how to build real-world apps with
              modern web technologies.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CourseDetails;
