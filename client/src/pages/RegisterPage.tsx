import { Link } from "react-router-dom";
import mainLogo from "../assets/logo.svg";

const RegisterPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen
    px-4 py-4 text-sm"
    >
      <Link
        to="/"
        className="flex items-center mb-6 text-2xl font-semibold text-white"
      >
        <img src={mainLogo} alt="logo" className="w-10 h-10 mr-2" />
        <span className="hidden md:inline-block">Chat.AI</span>
      </Link>
      <div
        className="w-full bg-slate-900 text-white rounded-xl shadow border
      border-gray-700 md:max-w-lg"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            className="text-xl font-bold leading-tight tracking-tight
          md:text-2xl"
          >
            Create your account
          </h1>

          <form className="space-y-4 md:space-y-6">
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium
              text-white"
              >
                Your username
              </label>
              <input
                type="text"
                className="bg-gray-700 border border-gray-600 placeholder-gray-400
                text-white focus:ring focus:ring-amber-500 focus:border-amber-500 w-full p-2.5
                rounded-lg sm:text-sm hover:bg-gray-600"
                placeholder="Username"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                className="bg-gray-700 border border-gray-600 placeholder-gray-400
                text-white focus:ring focus:ring-amber-500 focus:border-amber-500 w-full p-2.5
                rounded-lg sm:text-sm hover:bg-gray-600"
                placeholder="example@mail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="email"
                className="bg-gray-700 border border-gray-600 placeholder-gray-400
                text-white focus:ring focus:ring-amber-500 focus:border-amber-500 w-full p-2.5
                rounded-lg sm:text-sm hover:bg-gray-600"
                placeholder="••••••••"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-white"
              >
                Confirm password
              </label>
              <input
                type="email"
                className="bg-gray-700 border border-gray-600 placeholder-gray-400
                text-white focus:ring focus:ring-amber-500 focus:border-amber-500 w-full p-2.5
                rounded-lg sm:text-sm hover:bg-gray-600"
                placeholder="••••••••"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-cyan-200"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="remember" className="text-gray-300 ">
                    By signing up, you are creating a ChatAI account, and you
                    agree to ChatAI’s{" "}
                    <span className="text-blue-500 font-semibold">
                      Terms of Use
                    </span>{" "}
                    and{" "}
                    <span className="text-blue-500 font-semibold">
                      Privacy Policy
                    </span>
                    .
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-amber-600 hover:bg-amber-900
              focus:outline-none focus:ring focus:ring-amber-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center"
            >
              Sign up
            </button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-primary-600 hover:underline text-blue-500"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
