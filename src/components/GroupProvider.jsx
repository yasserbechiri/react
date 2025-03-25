import { useState, useEffect } from "react";
import { GroupContext } from "./GroupContext";

export const GroupProvider = ({ children }) => {
  const [hasJoinedTeam, setHasJoinedTeam] = useState(() => {
    return localStorage.getItem("hasJoinedTeam") === "true";
  });

  useEffect(() => {
    localStorage.setItem("hasJoinedTeam", hasJoinedTeam);
  }, [hasJoinedTeam]);

  const joinTeam = () => setHasJoinedTeam(true);
  const leaveTeam = () => setHasJoinedTeam(false);

  return (
    <GroupContext.Provider value={{ hasJoinedTeam, joinTeam, leaveTeam }}>
      {children}
    </GroupContext.Provider>
  );
};
