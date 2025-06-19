import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { SiCoursera } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Nav = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "/" },
    { name: "Courses", to: "/course" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    ...(!user
      ? [
          { name: "Login", to: "/login", special: true },
          { name: "Sign Up", to: "/signup", special: true },
        ]
      : [{ name: "Logout", to: "#", special: true, logout: true }]),
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-black to-blue-950 shadow-md">
      <nav className="container mx-auto flex justify-between items-center text-white p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-3xl text-green-400">
            <SiCoursera />
          </span>
          <span className="text-2xl font-bold text-orange-500">
            CourseHaven
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.logout ? "/" : link.to}
                onClick={() => {
                  if (link.logout) {
                    // Clear Redux state and cookie
                    dispatch(logout());
                  }
                  setIsOpen(false);
                }}
                className={`px-4 py-2 rounded-md transition ${
                  link.special
                    ? "border border-green-400 hover:bg-green-500 hover:text-white"
                    : "text-gray-300 hover:text-orange-400"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 text-white px-4 pb-4 space-y-2">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className={`block px-4 py-2 rounded-md transition ${
                link.special
                  ? "border border-green-400 hover:bg-green-500"
                  : "hover:text-orange-400"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
