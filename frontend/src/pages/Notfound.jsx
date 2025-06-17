import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-black to-blue-950 text-white px-4">
      <h1 className="text-6xl font-bold text-orange-500 mb-4">404</h1>
      <p className="text-xl mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full transition"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default NotFound;
