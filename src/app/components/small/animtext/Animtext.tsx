import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface animtextTyle {
  text: string;
  refs: any;
  color?: string;
  size?: string;
  lineHeaight?: number;
}

const Animtext = ({
  text,
  refs,
  color = "white",
  size = "15rem",
  lineHeaight = 0.9,
}: animtextTyle) => {
  const isInView = useInView(refs, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visable");
    }
  }, [isInView]);

  return (
    <h1
      style={{ color: color, fontSize: size, lineHeight: lineHeaight }}
      className={`overflow-hidden whitespace-nowrap font-[humanBold] max-h-[255px] uppercase }`}
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { y: 200 },
            visable: { y: 0 },
          }}
          transition={{
            delay: index * 0.07,
            duration: 0.5,
            type: "spring",
            stiffness: 300,
            damping: 30,
            ease: "easeInOut",
          }}
          initial="hidden"
          animate={controls}
          className={`animate-letterScroll inline-block`}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default Animtext;
