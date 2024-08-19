import React, { useState, useEffect } from "react";

const Loading = () => {
  const [isFlow, setIsFlow] = useState(true);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlow((prev) => !prev);
    }, 800);

    const secondIterval = setTimeout(() => {
      setIsDone(true);
    }, 1600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={` z-[1000] fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isFlow ? "bg-[#5647ff]" : "bg-[#bfff0a]"
      }`}
      style={isDone ? { transition: "top .5s ease-in-out", top: "-100%" } : {}}
    >
      <h1 className="text-white text-[20vw] font-[humanBold] tracking-wide">
        {isFlow ? "FLOW" : "PARTY"}
      </h1>
    </div>
  );
};

export default Loading;
