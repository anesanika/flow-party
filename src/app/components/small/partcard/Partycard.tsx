import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PartyCardProps {
  title: string;
  catg: string;
  image: string;
  color?: string;
  index?: number;
}

const PartyCard = ({
  title,
  catg,
  image,
  color = "#bfff0a",
}: PartyCardProps) => {
  return (
    <motion.div>
      <div>
        <Image
          src={image}
          width={350}
          height={500}
          alt={title}
          loading="lazy"
          className="pointer-events-none"
          objectFit="cover" // Correct value for objectFit
          objectPosition="center" // Correct value for objectPosition
          layout="intrinsic" // Correct value for layout
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

export default PartyCard;
