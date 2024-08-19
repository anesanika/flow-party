"use client";
import React, { useRef, useState } from "react";
import style from "./Head.module.css";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface mouseProps {
  x: any;
  y: any;
}

function Head() {
  const myref = useRef<any>(null);
  const [isEnter, setIsEnter] = useState<boolean>(false);

  const mouse: mouseProps = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const animationDur = { damping: 20, stiffness: 250, mass: 0.7 };

  const smoothMouse = {
    x: useSpring(mouse.x, animationDur),
    y: useSpring(mouse.y, animationDur),
  };

  const handleMove = (e: any) => {
    setIsEnter(true);
    if (myref.current) {
      const contProp = myref.current.getBoundingClientRect();

      const centerX = contProp.left + contProp.width / 2;
      const centerY = contProp.top + contProp.height / 2;

      const mouseX = (centerX - e.clientX) / 20;
      const mouseY = (centerY - e.clientY) / 20;

      mouse.x.set(-mouseX * 1.5);
      mouse.y.set(-mouseY * 2);
    }
  };
  const handleLeave = () => {
    setIsEnter(false);
    smoothMouse.x.set(0);
    smoothMouse.y.set(0);
  };

  return (
    <div
      ref={myref}
      className="w-full h-full grid place-content-center absolute z-[999]"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className={`${style.mianHead} relative rounded-full bg-[#5647ff] w-[360px] h-[360px] overflow-hidden flex justify-center items-center pointer-events-none`}
        style={{ x: smoothMouse.x, y: smoothMouse.y }}
      >
        <img
          className="absolute top-0 left-0 w-full h-full opacity-75 z-20"
          src="https://assets.website-files.com/63cabfe6113ebc7aed6c0258/63cabfe6113ebc08606c0280_flowvatar_lights.png"
          alt="headShadow"
        />
        <motion.div
          className={`flex flex-col justify-center items-center w-full gap-5`}
          style={
            isEnter ? { x: smoothMouse.x, y: smoothMouse.y } : { x: 0, y: 0 }
          }
          transition={{ stiffness: 200, damping: 10 }}
        >
          <div
            className={`${style.eyesCont} flex justify-center gap-[20%] w-full`}
          >
            <svg
              width="106"
              height="104"
              viewBox="0 0 106 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.0172 0H67.5889C70.4661 0 72.4739 2.84469 71.5039 5.54673L57.2205 45.3312L86.0692 15.6965C87.9916 13.7216 91.2739 14.1282 92.6537 16.5122L105.439 38.603C106.878 41.0886 105.412 44.2454 102.581 44.7585L62.6197 52L102.581 59.2415C105.412 59.7546 106.878 62.9114 105.439 65.397L92.6537 87.4878C91.2739 89.8718 87.9916 90.2784 86.0692 88.3035L56.3307 57.7547L67.9833 98.7195C68.7366 101.368 66.7424 104 63.9828 104H38.4111C35.5339 104 33.5261 101.155 34.4961 98.4533L48.7795 58.6688L19.9308 88.3035C18.0084 90.2784 14.7261 89.8718 13.3463 87.4878L0.560541 65.397C-0.878207 62.9114 0.587663 59.7546 3.4186 59.2415L43.3803 52L3.4186 44.7585C0.587663 44.2454 -0.878207 41.0886 0.560541 38.603L13.3463 16.5122C14.7261 14.1282 18.0084 13.7216 19.9308 15.6965L49.6693 46.2453L38.0167 5.28045C37.2634 2.63223 39.2576 0 42.0172 0Z"
                fill="black"
              />
            </svg>

            <svg
              width="106"
              height="104"
              viewBox="0 0 106 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.0172 0H67.5889C70.4661 0 72.4739 2.84469 71.5039 5.54673L57.2205 45.3312L86.0692 15.6965C87.9916 13.7216 91.2739 14.1282 92.6537 16.5122L105.439 38.603C106.878 41.0886 105.412 44.2454 102.581 44.7585L62.6197 52L102.581 59.2415C105.412 59.7546 106.878 62.9114 105.439 65.397L92.6537 87.4878C91.2739 89.8718 87.9916 90.2784 86.0692 88.3035L56.3307 57.7547L67.9833 98.7195C68.7366 101.368 66.7424 104 63.9828 104H38.4111C35.5339 104 33.5261 101.155 34.4961 98.4533L48.7795 58.6688L19.9308 88.3035C18.0084 90.2784 14.7261 89.8718 13.3463 87.4878L0.560541 65.397C-0.878207 62.9114 0.587663 59.7546 3.4186 59.2415L43.3803 52L3.4186 44.7585C0.587663 44.2454 -0.878207 41.0886 0.560541 38.603L13.3463 16.5122C14.7261 14.1282 18.0084 13.7216 19.9308 15.6965L49.6693 46.2453L38.0167 5.28045C37.2634 2.63223 39.2576 0 42.0172 0Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={`${style.mouthDiv} bg-black rounded-full`}></div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Head;
