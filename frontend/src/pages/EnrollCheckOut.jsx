import { Link } from "react-router-dom";

const EnrollCheckout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-zinc-900 to-blue-950 text-white p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Page Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-400">
            Course Enrollment
          </h2>
          <p className="text-zinc-400">
            Complete your enrollment and checkout below
          </p>
        </div>

        {/* Course Info */}
        <div className="bg-zinc-800 rounded-xl p-6 shadow-md space-y-2">
          <h3 className="text-xl font-semibold text-orange-400">
            React Mastery Bootcamp
          </h3>
          <p className="text-zinc-300">
            Become a pro in React, Redux, Hooks, and more!
          </p>
          <div className="flex justify-between mt-4">
            <span className="text-lg">Price:</span>
            <span className="text-green-400 font-bold">$49.99</span>
          </div>
        </div>

        {/* User Info Form */}
        <div className="bg-zinc-800 rounded-xl p-6 shadow-md space-y-4">
          <h4 className="text-lg font-bold text-orange-400">
            Your Information
          </h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none"
            />
            <input
              type="text"
              placeholder="Phone (optional)"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none"
            />
          </form>
        </div>

        {/* Payment Section */}
        <div className="bg-zinc-800 rounded-xl p-6 shadow-md space-y-4">
          <h4 className="text-lg font-bold text-orange-400">Payment Details</h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Card Number"
              className="w-full px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none"
            />
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="MM/YY"
                className="w-1/2 px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 px-4 py-2 rounded-md bg-zinc-700 text-white focus:outline-none"
              />
            </div>
          </form>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center pt-4">
          <Link
            to="/course"
            className="text-sm text-zinc-400 hover:text-orange-300 transition"
          >
            ← Back to Courses
          </Link>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg">
            Enroll & Pay
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnrollCheckout;
