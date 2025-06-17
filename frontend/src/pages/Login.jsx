import Nav from "../components/Nav";

const Login = () => {
  return (
    <>
      <Nav />
      <div class="bg-gradient-to-r from-black to-blue-950 flex items-center justify-center text-white h-135 ">
        <div class="bg-gray-900 p-8 rounded-lg shadow-lg w-[500px] m-8 md:m-0 mt-20">
          <h2 class="text-2xl font-bold mb-4 text-center">
            Welcome to <span class="text-orange-500">CourseHaven</span>
          </h2>
          <p class="text-center text-gray-400 mb-6">
            Log in to access paid content!
          </p>
          <form>
            <div class="mb-4">
              <label for="email" class=" text-gray-400 mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="name@email.com"
                required=""
                value=""
              />
            </div>
            <div class="mb-4">
              <label for="password" class=" text-gray-400 mb-2">
                Password
              </label>
              <div class="relative">
                <input
                  type="password"
                  id="password"
                  class="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="********"
                  required=""
                  value=""
                />
                <span class="absolute right-3 top-3 text-gray-500 cursor-pointer">
                  👁️
                </span>
              </div>
            </div>
            <button
              type="submit"
              class="w-full bg-green-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
