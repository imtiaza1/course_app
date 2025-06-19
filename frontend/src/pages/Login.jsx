import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { loginUser } from "../redux/authSlice";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, loading, success, user } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    setFormData((item) => ({
      ...item,
      [e.target.name]: e.target.value,
    }));
  };
  const { email, password } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [error, success, user]);
  return (
    <>
      <Nav />
      <div className="bg-gradient-to-r from-black to-blue-950 flex items-center justify-center text-white h-135 ">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[500px] m-8 md:m-0 mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome to <span className="text-orange-500">CourseHaven</span>
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Log in to access paid content!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label for="email" className=" text-gray-400 mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="name@email.com"
                required=""
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label for="password" className=" text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="********"
                  required=""
                  value={formData.password}
                  name="password"
                  onChange={handleChange}
                />
                <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="flex justify-center items-center w-full bg-green-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition"
            >
              {loading ? (
                <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-black"></div>
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
