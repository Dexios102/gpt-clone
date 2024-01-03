import ProfileImage from "../assets/profile.jpg";
import { IoCreateOutline } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaUnlockAlt } from "react-icons/fa";

const ChatPage = () => {
  return (
    <section className="flex justify-between mx-10 gap-10 mt-4">
      <div className="w-1/4 h-full">
        <div className="rounded-xl px-4 py-4 bg-[#00171f] shadow-sm shadow-gray-800 mb-4">
          <div className="flex flex-row items-center gap-4">
            <div className="rounded-full shadow-lg shadow-gray-500/50">
              <img
                src={ProfileImage}
                alt="profile"
                className="object-fill rounded-full w-14"
              />
            </div>
            <button
              className="text-white bg-gradient-to-br from-[#dc2f02] to-[#ffba08]
             hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2
             w-full inline-flex items-center justify-between"
            >
              New Chat
              <IoCreateOutline className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
        <div
          className="rounded-xl px-4 py-4 bg-[#00171f] shadow-sm shadow-gray-800 mb-4
        h-[70vh]"
        >
          <div className="inline-flex items-center justify-between w-full">
            <span className="text-gray-400 border-l-2 border-amber-600 pl-2 text-sm">
              Chat History
            </span>
            <button>
              <FaTrashAlt className="text-red-500 text-xl" />
            </button>
          </div>
          <div className="mt-4">
            <div
              className="inline-flex items-center justify-between w-full py-2
            bg-[#212529] rounded-lg shadow-sm shadow-gray-900 px-4"
            >
              <div className="text-sm text-gray-300">
                Example Chat History....
              </div>
              <button>
                <BsThreeDots className="text-white" />
              </button>
            </div>
          </div>
        </div>
        <div className="rounded-xl px-4 py-4 bg-[#00171f] shadow-sm shadow-gray-800">
          <div className="inline-flex items-center gap-2">
            <span className="text-amber-500 text-xl">
              <FaUnlockAlt />
            </span>
            <div className="inline-flex items-center gap-2">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-orange-400 w-full rounded-xl">Chats</div>
    </section>
  );
};

export default ChatPage;
