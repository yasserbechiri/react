import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import icon from "./assets/Vector.svg";
import GroupCard from "./components/GroupCard";
import GroupDetails from "./components/GroupDetails";
import groups from "./assets/groups";
import Input from "./components/Input";

export default function MyGroups() {
  const [remainingTime, setRemainingTime] = useState("Time's up!");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const dueDate = new Date(2025, 6, 22); // 22 July 2025

  function calculateRemainingTime() {
    const currentTime = new Date();
    const timeDifference = dueDate - currentTime;

    if (timeDifference <= 0) {
      setRemainingTime("Time's up!");
    } else {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      setRemainingTime(`${days} days, ${hours} hours, and ${minutes} min`);
    }
  }

  useEffect(() => {
    calculateRemainingTime();
    const interval = setInterval(calculateRemainingTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-6 p-12 pb-0 font-roboto">
      <h2 className="text-3xl font-semibold">My Groups</h2>
      <p className="text-lg">You can form or join a group</p>

      <p className="text-xl text-[#BD4F00] font-bold">Note :</p>
      <div className="flex font-medium">
        <div className="flex gap-6 w-1/3">
          <p>Last Date to join a group: </p>
          <p>{dueDate.toLocaleDateString()}</p>
        </div>
        <p className="font-fragment text-lg text-[#bd4f00]">{remainingTime}</p>
      </div>

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
        <div className="flex pl-2">
          <div className="w-[40%]">
          <Input placeHolder="First member school ID" />

          </div>
          <div>
          <Input placeHolder="Second member school ID" />

          </div>
        </div>

        <div className="flex mt-8">
          <div className="w-[40%] space-y-6">
            <h3 className="text-[#191B1D] font-medium text-2xl">Order theme</h3>
            <ul className="pl-4 space-y-8 ">
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
            <h3 className="text-[#191B1D] font-medium text-2xl">Encadreur Order</h3>
            <ul className="pl-4 space-y-8 ">
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

      {/* Portal for Group Details */}
      {selectedGroup &&
        ReactDOM.createPortal(
          <GroupDetails
            group={selectedGroup}
            onClose={() => setSelectedGroup(null)}
          />,
          document.body
        )}
    </div>
  );
}
