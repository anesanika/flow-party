import React, { useRef, useState } from "react";
import partycards from "./cards.js";
import Partycard from "../small/partcard/Partycard";
import { useScroll, useTransform, useSpring } from "framer-motion";

const Party = () => {
  const myRef = useRef(null);
  const [myIndex, setMyIndex] = useState(100);

  const { scrollYProgress } = useScroll({
    target: myRef,
    offset: ["start end", "end end"],
  });

  const animationDur = { damping: 50, stiffness: 300, mass: 0.5 };

  return (
    <div className="bg-[#010101] py-16" ref={myRef}>
      <div className="content">
        <div>
          <div className="w-full">
            <h1 className="text-white font-[humanBold] text-center text-[9rem] uppercase">
              flow party
            </h1>
          </div>
          <div className="flex justify-center items-center gap-10 py-10 flex-wrap">
            {partycards.map((item, index) => {
              // Modify y value based on the index
              const yLinear = useTransform(
                scrollYProgress,
                [0, 1],
                [myIndex + index * 100, 0 + index * 20]
              );

              const y = useSpring(yLinear, animationDur);

              return (
                <Partycard
                  key={index}
                  y={y}
                  image={item.image}
                  title={item.title}
                  catg={item.catg}
                  color={item.color}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Party;
