import ProfileImage from "../assets/profile.jpg";
import { IoCreateOutline } from "react-icons/io5";

const ChatPage = () => {
  return (
    <section className="flex items-center justify-between mx-10 gap-10 mt-4">
      <div className=" w-1/4 rounded-xl px-4 py-4 bg-[#00171f] shadow-sm shadow-gray-800">
        <div className="flex flex-row items-center gap-4 z-10 relative">
          <div className="rounded-full shadow-lg shadow-gray-500/50">
            <img
              src={ProfileImage}
              alt="profile"
              className="object-fill rounded-full w-14"
            />
          </div>
          <button
            className="text-white bg-gradient-to-br from-purple-600 to-blue-500
             hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-800
             font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2
             w-full inline-flex items-center justify-between"
          >
            New Chat
            <IoCreateOutline className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="border border-amber-500 mt-4 text-white hidden">
          Content
        </div>
      </div>
      <div className="border border-orange-400 w-full rounded-xl">div2</div>
    </section>
  );
};

export default ChatPage;
