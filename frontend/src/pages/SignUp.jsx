import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../components/Nav";
import { createUser } from "../redux/authSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { error, success, loading, user } = useSelector((state) => state.auth);

  const { firstName, lastName, email, password } = formData;
  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(createUser(formData));
  };
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    }
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
    }
  }, [error, success, loading, user]);
  return (
    <>
      <Nav />
      <div className="bg-gradient-to-r from-black to-blue-950 flex items-center justify-center text-white h-142 ">
        <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[500px] m-8 md:m-0 mt-20">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Welcome to <span className="text-orange-500">CourseHaven</span>
          </h2>
          <p className="text-center text-gray-400 mb-6">
            Just Signup To Join Us!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label for="firstname" className=" text-gray-400 mb-2">
                Firstname
              </label>
              <input
                type="text"
                id="firstname"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your firstname"
                name="firstName"
                value={firstName}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label for="lastname" className=" text-gray-400 mb-2">
                Lastname
              </label>
              <input
                type="text"
                id="lastname"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your lastname"
                required=""
                name="lastName"
                value={lastName}
                onChange={onChange}
              />
            </div>
            <div className="mb-4">
              <label for="email" className=" text-gray-400 mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="name@email.com"
                required
                name="email"
                value={email}
                onChange={onChange}
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
                  name="password"
                  value={password}
                  onChange={onChange}
                />
                <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition"
            >
              Signup
              <div className="loader spinner-border text-success"></div>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
