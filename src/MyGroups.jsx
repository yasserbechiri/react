import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { GroupContext } from "./GroupContext"; // Import the GroupContext
import icon from "./assets/Vector.svg";
import GroupCard from "./components/GroupCard";
import GroupDetails from "./components/GroupDetails";
import groups from "./assets/groups";
import Input from "./components/Input";
import RemainigTime from "./components/RemainingTime";

export default function MyGroups() {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const navigate = useNavigate();
  const { hasJoinedTeam, joinTeam } = useContext(GroupContext); // Access GroupContext

  // Redirect if the user has already joined a team
  useEffect(() => {
    if (hasJoinedTeam) {
      navigate("/work-space");
    }
  }, [hasJoinedTeam, navigate]);

  // Handle joining a team
  const handleJoinTeam = () => {
    joinTeam(); // Use the joinTeam function from GroupContext
    navigate("/work-space");
  };

  return (
    <div className="flex flex-col gap-6 p-12 font-roboto">
      <RemainigTime title="My Groups" dueDate={new Date(2025, 5, 22)} />

      <section>
        <div className="flex justify-between items-center mt-6 mr-12">
          <h3 className="text-[#0A7477] text-xl font-bold">Groups available</h3>
          <button className="bg-[#B2DEDA] hover:bg-[#0A7477] flex gap-2 justify-center items-center cursor-pointer rounded-full py-1 px-8">
            <img src={icon} alt="icon" className="w-6 h-6" />
            <p className="text-[#000000] text-sm">filter</p>
          </button>
        </div>
        <div className="flex gap-6 mt-6 py-4">
          {groups.map((group) => (
            <GroupCard
              key={group.id}
              group={group}
              onClick={() => setSelectedGroup(group)}
            />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="text-[#0A7477] text-xl font-bold">Form a group</h3>
        <p className="text-[#191B1D]">
          To form a group the team must start with three members
        </p>
        <div className="flex flex-col md:flex-row gap-6 md:gap-16 pl-2">
          <div className="">
            <Input placeHolder="First member school ID" />
          </div>
          <div>
            <Input placeHolder="Second member school ID" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 mt-16">
          <div className="space-y-6">
            <h3 className="text-[#191B1D] font-medium text-2xl">Order theme</h3>
            <ul className="pl-4 space-y-4">
              <li>
                <Input placeHolder="Theme 1" />
              </li>
              <li>
                <Input placeHolder="Theme 2" />
              </li>
              <li>
                <Input placeHolder="Theme 3" />
              </li>
              <li>
                <Input placeHolder="Theme 4" />
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-[#191B1D] font-medium text-2xl">
              Encadreur Order
            </h3>
            <ul className="pl-4 space-y-4">
              <li>
                <Input placeHolder="encadreur 1" />
              </li>
              <li>
                <Input placeHolder="encadreur 2" />
              </li>
              <li>
                <Input placeHolder="encadreur 3" />
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="flex justify-end">
        <button className="bg-[#00A99B] text-[#E6F0F2] rounded-full py-4 px-6 w-1/6 cursor-pointer hover:bg-[#008e8a] active:bg-[#006f6b]">
          Create team
        </button>
      </div>

      {/* Portal for Group Details */}
      {selectedGroup &&
        ReactDOM.createPortal(
          <GroupDetails
            onJoinTeam={handleJoinTeam}
            group={selectedGroup}
            onClose={() => setSelectedGroup(null)}
          />,
          document.body
        )}
    </div>
  );
}
