import { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { GroupContext } from "./context"; // Import the GroupContext
import RemainigTime from "./components/RemainingTime";
import notiIcon from "./assets/notificationIcon.svg";
import Input from "./components/Input";
import groups from "./assets/groups";
import ConsultDamandes from "./components/ConsultDemandes";

export default function WorkSpaces() {
  const [consultClicked, setConsultClicked] = useState(false);
  const navigate = useNavigate();
  const { hasJoinedTeam, leaveTeam } = useContext(GroupContext); // Access GroupContext

  const titleStyle = "text-[#202020] text-xl font-bold mb-4";
  const pStyle = "text-[#282A2C] font-fragment text-lg mb-6";
  const group = groups[0];
  const buttonClass = "w-48 py-2 rounded-full shadow-md";

  // Redirect if the user hasn't joined a team
  useEffect(() => {
    if (!hasJoinedTeam) {
      navigate("/my-groups");
    }
  }, [hasJoinedTeam, navigate]);

  // Handle leaving the group
  const handleLeaveGroup = () => {
    leaveTeam(); // Use the leaveTeam function from GroupContext
    navigate("/my-groups");
  };

  return (
    <div className="flex flex-col gap-6 p-12 font-roboto">
      <RemainigTime title="Work Space" dueDate={new Date(2024, 6, 22)} />

      <section className="w-4/5">
        <h3 className="text-[#0A7477] text-xl font-bold mb-8">My Group</h3>

        <div className="flex justify-between mb-8">
          {/* Group Members */}
          <div className="w-1/3">
            <div className="bg-[#E6F0F2] rounded-2xl shadow-md p-4">
              <h3 className="text-2xl mb-2 text-[#202020]">Members:</h3>
              <ul className="space-y-2 p-4 pt-0 font-fragment list-disc text-[#282A2C]">
                {group.members.map((member, index) => (
                  <li key={index}>{member}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Group Actions */}
          <ul className="flex flex-col space-y-4 self-center">
            <li>
              <button
                className={`${buttonClass} text-[#E6F0F2] bg-gradient-to-r from-[#202020] to-[#2F3E47]`}
              >
                Set Leader
              </button>
            </li>
            <li>
              <button
                className={`${buttonClass} text-[#202020] bg-[#E6F0F2] flex justify-center gap-4`}
                onClick={() => setConsultClicked(true)}
              >
                <p>Consult Demands</p>
                <img src={notiIcon} alt="notification" />
              </button>
            </li>
            <li>
              <button
                className={`${buttonClass} text-[#B70000] bg-[#F3F8F8]`}
                onClick={handleLeaveGroup}
              >
                Leave Group
              </button>
            </li>
          </ul>

          {/* New Leader Input */}
          <div className="mt-6">
            <Input placeHolder="New Leader School ID" />
          </div>
        </div>

        {/* Group Details */}
        <div>
          <h3 className={titleStyle}>Theme</h3>
          <p className={pStyle}>Gestion des projets de fin d’étude</p>

          <h3 className={titleStyle}>Encadreur</h3>
          <p className={pStyle}>Bensaber</p>

          <h3 className={titleStyle}>Skills Needed</h3>
          <div className="flex gap-12 justify-between">
            <ul className="space-y-4 grid grid-cols-2 w-1/2 gap-x-6">
              {group.skills.map((skill, index) => (
                <li key={index}>
                  <div className="font-fragment border-[#46464640] text-[#464646] border rounded-full px-6 py-2">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4">
              <button className="mr-2 font-fragment border-[#46464640] text-[#464646] border rounded-full px-12 py-2 focus:outline-none">
                Select
              </button>
              <button className="bg-[#00A99B] text-[#E6F0F2] rounded-full py-2 px-12">
                Add Skill
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Consult Demands Modal */}
      {consultClicked &&
        ReactDOM.createPortal(
          <ConsultDamandes onClose={() => setConsultClicked(false)} />,
          document.body
        )}
    </div>
  );
}