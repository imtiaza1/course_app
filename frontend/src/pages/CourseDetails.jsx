import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const CourseDetails = () => {
  return (
    <>
      <Nav />
      <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <img
              src="https://via.placeholder.com/600x350"
              alt="Course"
              className="rounded-xl shadow-lg w-full md:w-1/2"
            />
            <div className="md:w-1/2">
              <h1 className="text-4xl font-bold text-orange-400 mb-4">
                React for Beginners
              </h1>
              <p className="text-gray-300 mb-6">
                Learn how to build modern, fast, and interactive web
                applications with React. From components to hooks, this course
                covers everything you need to get started.
              </p>
              <ul className="text-gray-400 list-disc ml-5 space-y-1 mb-6">
                <li>20+ hours of content</li>
                <li>Lifetime access</li>
                <li>Certificate of completion</li>
                <li>Downloadable resources</li>
              </ul>
              <Link
                to={"/enroll"}
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition"
              >
                Enroll Now
              </Link>
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
