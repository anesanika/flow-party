import React, { useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface AnimtextType {
  text: string;
  refs: any;
  color?: string;
  size?: string; // Expecting a responsive size like "10vw" or "5rem"
  lineHeaight?: number;
}

const Animtext = ({
  text,
  refs,
  color = "white",
  size = "15vw", // Default size is now in vw for responsiveness
  lineHeaight = 0.9,
}: AnimtextType) => {
  const isInView = useInView(refs, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visable");
    }
  }, [isInView, controls]);

  return (
    <h1
      style={{
        color: color,
        fontSize: size,
        lineHeight: lineHeaight,
      }}
      className={`overflow-hidden whitespace-nowrap font-[humanBold] uppercase`}
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
