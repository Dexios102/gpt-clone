import { Link } from "react-router-dom";
import mainLogo from "../assets/logo.svg";
import { toast } from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const auth = useAuth();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    try {
      toast.loading("Logging in...", { id: "signin" });
      await auth?.signin(email, password);
      toast.success("Logged in successfully", { id: "signin" });
    } catch (e) {
      console.log(e);
      toast.error("Failed to login", { id: "signin" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-sm">
      <Link
        to="/"
        className="flex items-center mb-6 text-2xl font-semibold text-white"
      >
        <img src={mainLogo} alt="logo" className="w-10 h-10 mr-2" />
        <span className="hidden md:inline-block">Chat.AI</span>
      </Link>
      <div
        className="w-full bg-slate-900 text-white rounded-xl shadow border
      border-gray-700 md:mt-0 sm:max-w-lg xl:p-0"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Welcome back
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor=""
                className="block mb-2 text-sm font-medium text-white"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                name="password"
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
                    Remember me
                  </label>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline text-sm font-medium"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-amber-600 hover:bg-amber-900
              focus:outline-none focus:ring focus:ring-amber-300 font-medium rounded-lg
               text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium text-primary-600 hover:underline text-blue-500"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
