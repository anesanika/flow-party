"use client";
import React, { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";

interface scrollProps {
  children: React.ReactNode;
  scale?: any;
  rotate?: any;
}

const Sectionscroll = ({ children, scale, rotate }: scrollProps) => {
  const animationDur = { damping: 30, stiffness: 400, mass: 0.2 };

  const smoothAnim = {
    scale: useSpring(scale, animationDur),
    rotate: useSpring(rotate, animationDur),
  };

  return (
    <motion.div
      style={{ scale: smoothAnim.scale, rotate: smoothAnim.rotate }}
      className="sticky top-0"
    >
      {children}
    </motion.div>
  );
};

export default Sectionscroll;
