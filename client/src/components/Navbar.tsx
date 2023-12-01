import mainLogo from "../assets/logo.svg";
import { useState } from "react";
import { BsRobot } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const auth = useAuth();
  const [isDrop, setIsDrop] = useState(false);
  const toggleDropdown = () => {
    setIsDrop(!isDrop);
  };

  return (
    <nav
      className="flex flex-row items-center justify-between w-full
    px-4 py-4 z-50 sticky top-0 md:px-10"
    >
      <Link to="/">
        <div className="flex flex-row items-center gap-2">
          <img src={mainLogo} alt="logo" className="h-8 w-8" />
          <h1
            className="gradient-text font-semibold tracking-wider
          text-lg"
          >
            Chat.AI
          </h1>
        </div>
      </Link>
      {auth?.isLoggedIn ? (
        <>
          <button
            className="text-white flex flex-row items-center"
            onClick={toggleDropdown}
          >
            <BsRobot className="h-6 w-6 text-amber-500" />
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          {isDrop && (
            <div className="z-10 absolute top-10 right-8 mt-2 divide-y rounded-lg shadow w-44 bg-gray-700 divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Dexios</div>
                <div className="font-medium truncate">toxicdex@gmail.com</div>
              </div>
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownInformationButton"
              >
                <li>
                  <Link
                    to="/chats"
                    className="block px-4 py-2 text-sm hover:bg-gray-600
                      text-gray-200"
                  >
                    AI Chat
                  </Link>
                </li>
                <li>
                  <Link
                    to="/profile-setting"
                    className="block px-4 py-2 text-sm hover:bg-gray-600
                      text-gray-200"
                  >
                    Profile Settings
                  </Link>
                </li>
              </ul>
              <div className="py-2">
                <Link
                  to="/signout"
                  className="block px-4 py-2 text-sm hover:bg-gray-600
                   text-red-500 font-semibold"
                >
                  Sign Out
                </Link>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-row items-center gap-2 md:gap-4">
          <Link to="/signup">
            <button
              className="button-line-gradient relative
          inline-flex items-center justify-center overflow-hidden
          group group-hover:from-orange-500 group-hover:to-amber-400
         hover:text-white"
            >
              <span
                className="relative px-3 py-1.5 transition-all
            ease-in duration-75 bg-slate-900 rounded-md
            group-hover:bg-opacity-0"
              >
                Sign Up
              </span>
            </button>
          </Link>
          <Link to="/signin">
            <button className="button-full-gradient">Sign In</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
