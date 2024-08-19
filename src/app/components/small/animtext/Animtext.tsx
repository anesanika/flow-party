import React, { useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface animtextType {
  text: string;
  refs: React.RefObject<HTMLDivElement>;
  color?: string;
  size?: string;
  lineHeight?: number; // Fixed spelling from "lineHeaight" to "lineHeight"
}

const Animtext = ({
  text,
  refs,
  color = "white",
  size = "15rem",
  lineHeight = 0.9,
}: animtextType) => {
  const isInView = useInView(refs, { once: true });

  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible"); // Fixed spelling from "visable" to "visible"
    }
  }, [isInView]);

  return (
    <h1
      style={{ color, fontSize: size, lineHeight }}
      className="overflow-hidden whitespace-nowrap font-[humanBold] max-h-[255px] uppercase"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { y: 200 },
            visible: { y: 0 }, // Fixed spelling from "visable" to "visible"
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
          className="animate-letterScroll inline-block"
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
};

export default Animtext;
