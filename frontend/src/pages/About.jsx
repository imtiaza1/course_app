import Footer from "../components/Footer";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <Nav />
      <section className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-orange-500 mb-6">
            About CourseHaven
          </h1>
          <p className="text-gray-300 mb-10 text-lg leading-relaxed">
            At <span className="text-green-400 font-semibold">CourseHaven</span>
            , we believe that education should be accessible, engaging, and
            empowering. Our platform offers a variety of expertly crafted
            courses designed to help you learn new skills, advance your career,
            and follow your passions — all at your own pace.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                🎯 Our Mission
              </h3>
              <p className="text-gray-400">
                To deliver affordable, quality education online that helps
                people transform their careers and lives.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                🌎 Our Vision
              </h3>
              <p className="text-gray-400">
                To become the leading online learning platform that empowers
                millions around the globe.
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">
                🚀 Why Choose Us
              </h3>
              <p className="text-gray-400">
                Interactive content, industry-expert instructors, lifetime
                access, and certificates for your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
