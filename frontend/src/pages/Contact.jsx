import Footer from "../components/Footer";
import Nav from "../components/Nav";
const Contact = () => {
  return (
    <>
      <Nav />
      <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-orange-500 mb-10">
            Contact Us
          </h1>

          <p className="text-center text-gray-300 mb-12">
            Have questions? Need help? We'd love to hear from you. Fill out the
            form and we’ll get back to you as soon as possible.
          </p>

          <form className="bg-zinc-900 p-8 rounded-xl shadow-lg space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your message..."
                className="w-full px-4 py-2 rounded-md bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
