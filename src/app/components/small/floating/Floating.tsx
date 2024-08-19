import React from "react";
import Image from "next/image";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

interface floatinProps {
  width?: number;
  src: string;
  refs?: any;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
}

const Floating = ({
  width = 300,
  src,
  refs,
  top,
  left,
  bottom,
  right,
}: floatinProps) => {
  const { scrollYProgress } = useScroll({
    target: refs,
    offset: ["start start", "end end"],
  });
  const linerY = useTransform(scrollYProgress, [0, 1], [-50, 100]);
  const rotation = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const animationDur = { damping: 50, stiffness: 300, mass: 0.5 };

  const y = useSpring(linerY, animationDur);
  const rotate = useSpring(rotation, animationDur);

  return (
    <motion.div
      className="absolute"
      style={{ y, rotate, top: top, left: left, bottom: bottom, right: right }}
    >
      <Image width={width} height={300} src={src} alt="emojy-one" />
    </motion.div>
  );
};

export default Floating;
