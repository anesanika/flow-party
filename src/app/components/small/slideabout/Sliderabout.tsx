import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Animtext from "../animtext/Animtext";

const Sliderabout = ({ refs }: any) => {
  const { scrollYProgress } = useScroll({
    target: refs,
    offset: ["start start", "end end"],
  });
  const linerX = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const minusLinerX = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const animationDur = { damping: 50, stiffness: 300, mass: 0.5 };
  const plusX = useSpring(linerX, animationDur);
  const minusX = useSpring(minusLinerX, animationDur);

  return (
    <>
      <div className="mb-16">
        <p className="font-medium text-[18px]">who we are</p>
      </div>
      <motion.div style={{ x: plusX }}>
        <Animtext
          text="A Witty, and Upbeat place"
          refs={refs}
          lineHeaight={0.8}
          size="11vw"
          color="#1c1c1c"
        />
      </motion.div>
      <motion.div style={{ x: minusX }}>
        <Animtext
          text="for Webflow Developers"
          color="#1c1c1c"
          refs={refs}
          size="11vw"
        />
      </motion.div>
      <motion.div style={{ x: plusX }}>
        <Animtext
          text="to learn, share knowledge"
          refs={refs}
          color="#1c1c1c"
          size="11vw"
        />
      </motion.div>
      <motion.div style={{ x: minusX }}>
        <Animtext text="and network" refs={refs} size="11vw" color="#1c1c1c" />
      </motion.div>
    </>
  );
};

export default Sliderabout;
