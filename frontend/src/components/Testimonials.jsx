const Testimonials = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-blue-950 py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          What Students Say
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-gray-300 mb-2 italic">
              "This course changed my life!"
            </p>
            <span className="text-orange-400 font-semibold">- Sarah M.</span>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform">
            <p className="text-gray-300 mb-2 italic">
              "Very well explained. Highly recommended."
            </p>
            <span className="text-green-400 font-semibold">- John D.</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
