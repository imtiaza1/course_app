import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <hr className="border-gray-700" />

      <footer className="bg-gradient-to-r from-black to-blue-950 text-white py-10 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo + Social */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-3xl text-green-400">
                <SiCoursera />
              </span>
              <h1 className="text-2xl font-bold text-orange-500">
                CourseHaven
              </h1>
            </div>
            <div>
              <p className="text-white mb-2">Follow us</p>
              <div className="flex space-x-4 text-white">
                <a href="#" className="text-2xl hover:text-blue-500 transition">
                  <FaFacebook />
                </a>
                <a href="#" className="text-2xl hover:text-pink-500 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="text-2xl hover:text-blue-400 transition">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Connect Links */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
            <ul className="text-gray-400 space-y-1 text-center">
              <li className="hover:text-white cursor-pointer transition">
                YouTube – Learn Coding
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Telegram – Learn Coding
              </li>
              <li className="hover:text-white cursor-pointer transition">
                GitHub – Learn Coding
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-lg font-semibold text-white mb-2">
              © {new Date().getFullYear()} CourseHaven
            </h3>
            <ul className="text-gray-400 space-y-1 text-center">
              <li className="hover:text-white cursor-pointer transition">
                Terms &amp; Conditions
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Refund &amp; Cancellation
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
