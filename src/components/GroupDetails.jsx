import React from "react";

const GroupDetails = ({ group, onClose, onJoinTeam }) => {
  return (
    <div
      className=" fixed inset-0 flex items-center justify-center bg-black/25 backdrop-blur-sm "
      onClick={onClose}
    >
      <div
        className="bg-white py-8 px-12  rounded-4xl shadow-lg w-2/5 font-roboto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-8">
          {`Group ${group.id}`}
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex">
            <b className="w-1/3 text-[#191B1D">Theme</b>
            <p className=" font-fragment text-[#464646]">{group.theme}</p>
          </div>
          <div className="flex ">
            <b className="w-1/3 text-[#191B1D]">Encadreur</b>
            <p className="font-fragment text-[#464646]">{group.encadreur}</p>
          </div>
          <div className="flex">
            <b className="w-1/3 text-[#191B1D">Members</b>
            <ul className="space-y-1.5">
              {group.members.map((member, index) => (
                <li key={index} className="font-fragment text-black ">
                  {member}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex">
            <b className="w-1/3">Skills needed</b>
            <ul className="space-y-2">
              {group.skills.map((skill, index) => (
                <li key={index} className="font-fragment ">
                  <div className="font-fragment border-[#46464640] text-[#464646] border rounded-full px-4 ">
                    {skill}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end mt-8">
          <button
            className="bg-[#00a99b] w-1/3 text-white py-2 px-6 rounded-full hover:bg-[#008e8a] active:bg-[#006f6b] focus:outline-none focus:ring-2 focus:ring-[#00a99b]"
            onClick={onJoinTeam}
          >
            Join team
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupDetails;
