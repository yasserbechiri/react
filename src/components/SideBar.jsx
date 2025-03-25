import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GroupContext } from "./GroupContext"; // Import the context
import profileImg from "../assets/profile-img.png";

export default function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { hasJoinedTeam } = useContext(GroupContext); // Access context
  const selectedPath = location.pathname;

  const menuItems = [
    { name: "Home", path: "/home" },
    {
      name: hasJoinedTeam ? "Work Space" : "My Groups",
      path: hasJoinedTeam ? "/work-space" : "/my-groups",
    },
    { name: "My Documents", path: "/my-documents" },
    { name: "Notifications", path: "/notifications" },
    { name: "Tasks", path: "/tasks" },
    { name: "Project Info", path: "/project-info" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col w-1/5 bg-[#2F3E47] text-[#E6F0F2] font-fragment">
      <div className="flex flex-col mt-8 gap-6 items-center justify-center p-4">
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <p className="text-lg font-semibold">Ahmed Houssam</p>
      </div>

      <ul className="flex flex-col m-6 justify-center items-center font-normal py-12">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`w-[90%] text-center p-3 border-b cursor-pointer transition duration-300 transform 
              ${
                selectedPath === item.path
                  ? "text-[#00A99B] border-[#00A99B] border-b-2 font-semibold w-full"
                  : "border-[#B2DEDA]"
              }
              hover:text-[#00A99B] hover:scale-105 hover:border-[#00A99B]`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="text-[#282A2C] bg-white mx-6 py-2 rounded-full mt-12 transition duration-300 
          hover:bg-[#00A99B] hover:text-white hover:shadow-lg hover:scale-105"
        onClick={handleLogout}
      >
        Log out
      </button>
    </div>
  );
}
