import { useState } from "react";
import { GroupContext } from "./GroupContext";

export const GroupProvider = ({ children }) => {
  const [hasJoinedTeam, setHasJoinedTeam] = useState(
    localStorage.getItem("hasJoinedTeam") === "true"
  );

  const joinTeam = () => {
    localStorage.setItem("hasJoinedTeam", "true");
    setHasJoinedTeam(true);
  };

  const leaveTeam = () => {
    localStorage.setItem("hasJoinedTeam", "false");
    setHasJoinedTeam(false);
  };

  return (
    <GroupContext.Provider value={{ hasJoinedTeam, joinTeam, leaveTeam }}>
      {children}
    </GroupContext.Provider>
  );
};