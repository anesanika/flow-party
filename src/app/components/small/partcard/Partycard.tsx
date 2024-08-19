import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface partyType {
  title: string;
  catg: string;
  image: string;
  color?: string;
  y?: any;
  index?: number;
}

const Partycard = ({ title, catg, image, color = "#bfff0a", y }: partyType) => {
  console.log(y);

  return (
    <motion.div style={{ y: y }}>
      <div>
        <Image
          src={image}
          width={350}
          height={500}
          alt="title"
          loading="lazy"
          className="pointer-events-none"
        />
        <div className="text-white uppercase">
          <h1
            className="font-[humanBold] text-[4rem] uppercase leading-[1.3]"
            style={{ color: color }}
          >
            {title}
          </h1>
          <p>{catg}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Partycard;
