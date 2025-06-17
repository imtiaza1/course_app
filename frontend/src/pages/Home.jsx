import { Link } from "react-router-dom";
import FeaturedCourses from "../components/FeaturedCourses";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Nav />
      <div className="bg-gradient-to-r from-black to-blue-950 text-white min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-20 px-4 bg-gradient-to-r from-black to-blue-950">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400">
            Master New Skills Online
          </h1>

          <p className="text-lg max-w-xl mx-auto mb-6 text-white">
            Learn at your own pace with high-quality video courses by top
            instructors.
          </p>

          <Link
            to={"/course"}
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Browse Courses
          </Link>
        </section>

        {/* Featured Courses Carousel */}
        <FeaturedCourses />

        {/* Testimonials */}
        <Testimonials />

        {/* Call to Action */}
        <section className="text-center py-20 bg-gradient-to-r from-black to-blue-950">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">
            Start Learning Today
          </h2>
          <p className="mb-6 text-white">
            Join thousands of students improving their skills online.
          </p>
          <Link
            to={"signup"}
            className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600 transition"
          >
            Sign Up Now
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
