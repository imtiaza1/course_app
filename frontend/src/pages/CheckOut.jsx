const Checkout = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto bg-zinc-900 rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-orange-500 mb-8 text-center">
          Checkout
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Course Summary */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Course Summary</h2>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <img
                src="https://via.placeholder.com/400x200"
                alt="Course Thumbnail"
                className="rounded-md mb-3"
              />
              <h3 className="text-lg font-bold mb-1">React for Beginners</h3>
              <p className="text-gray-400 text-sm mb-2">
                Master the basics of React with hands-on projects.
              </p>
              <p className="text-green-400 font-semibold text-lg">Price: $49</p>
            </div>
          </div>

          {/* Billing Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Info</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-2 bg-zinc-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 bg-zinc-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Card Number"
                className="w-full px-4 py-2 bg-zinc-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-green-400"
              />
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-1/2 px-4 py-2 bg-zinc-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 px-4 py-2 bg-zinc-800 text-white border border-gray-700 rounded-md focus:ring-2 focus:ring-green-400"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold px-6 py-2 rounded-full"
              >
                Confirm & Pay
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
