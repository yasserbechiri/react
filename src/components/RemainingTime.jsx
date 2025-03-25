import { useState , useEffect } from "react"; 
export default function RemainigTime({ dueDate , title }) {
  const [remainingTime, setRemainingTime] = useState("Time's up!");
  
  useEffect(() => {
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

    calculateRemainingTime();
    const interval = setInterval(calculateRemainingTime, 60000);
    return () => clearInterval(interval);
  }, [dueDate]);

  return (
    <>
      <h2 className="text-3xl font-semibold">{title}</h2>
    <p className="text-lg">You can form or join a group</p>
      <p className="text-xl text-[#BD4F00] font-bold">Note :</p>
      <div className="flex font-medium">
        <div className="flex gap-6 w-1/3">
          <p>Last Date to join a group: </p>
          <p>{dueDate.toLocaleDateString()}</p>
        </div>
        <p className="font-fragment text-lg text-[#bd4f00]">{remainingTime}</p>
      </div>
    </>
  );
}
