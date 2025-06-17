import { Link } from "react-router-dom";

const Enroll = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-6">
      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-8">
          Enroll in a Course
        </h1>

        <form className="space-y-6">
          <div>
            <label className="block text-sm mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Select Course</label>
            <select className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400">
              <option>React for Beginners</option>
              <option>Full Stack Development</option>
              <option>Node.js Masterclass</option>
              <option>UI/UX Design Bootcamp</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-2">Additional Notes</label>
            <textarea
              rows="4"
              placeholder="Write any message..."
              className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <Link
            to={"/checkout"}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition w-full"
          >
            Enroll Now
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Enroll;
