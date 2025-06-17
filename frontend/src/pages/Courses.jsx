import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Courses = () => {
  return (
    <>
      <Nav />
      <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-orange-400">
            Explore Our Courses
          </h1>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-zinc-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src="https://via.placeholder.com/400x200"
                  alt="Course"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h2 className="text-xl font-semibold mb-2 text-green-400">
                    JavaScript Essentials
                  </h2>
                  <p className="text-sm text-gray-300 mb-4">
                    Learn JavaScript from scratch and become job-ready with
                    real-world practice.
                  </p>
                  <Link
                    to={"/coursedetails"}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Courses;
