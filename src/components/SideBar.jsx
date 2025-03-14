import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profileImg from "../assets/profile-img.png";  

export default function SideBar() { 
    const navigate = useNavigate();  
    const [selected, setSelected] = useState("Home"); 

    const menuItems = [
        { name: "Home", path: "/home" },
        { name: "My Groups", path: "/my-groups" },
        { name: "My Documents", path: "/my-documents" },
        { name: "Notifications", path: "/notifications" },
        { name: "Tasks", path: "/tasks" },
        { name: "Project Info", path: "/project-info" }
    ];

    return (
        <div className="flex flex-col w-[288px] h-screen bg-[#2F3E47] text-[#E6F0F2] font-(family-name:--fragment)">
            <div className="flex flex-col mt-8 gap-6 items-center justify-center p-4">
                <img src={profileImg} alt="profile img" className="w-20 h-20 rounded-full" />
                <p className="text-lg font-semibold">Ahmed Houssam</p>
            </div>

            <ul className="flex flex-col m-6 justify-center items-center font-normal flex-grow">
                {menuItems.map((item) => (
                    <li 
                        key={item.name}
                        onClick={() => {
                            setSelected(item.name);  
                            navigate(item.path);  
                        }} 
                        className={`w-[90%] text-center p-3 border-b cursor-pointer transition duration-300 transform 
                            ${selected === item.name 
                                ? "text-[#00A99B] border-[#00A99B] border-b-2 font-semibold w-full " 
                                : "border-[#B2DEDA]"
                            }
                            hover:text-[#00A99B] hover:scale-105 hover:border-[#00A99B] `}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>

            <button 
                type="button" 
                className="text-[#282A2C] bg-white mx-6 py-2 rounded-full mt-auto mb-6 transition duration-300 
                           hover:bg-[#00A99B] hover:text-white hover:shadow-lg hover:scale-105"
                onClick={() => navigate("/login")} 
            >
                Log out
            </button>
        </div>
    );
}
