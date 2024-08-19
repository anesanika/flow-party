import React, { useRef } from "react";
import Animtext from "../small/animtext/Animtext";
import Textsvg from "../small/svgs/Textsvg";
import style from "./Footer.module.css";

const Footer = () => {
  const myRef = useRef(null);

  return (
    <footer ref={myRef} className="my-10 py-10">
      <div className="content">
        <div className="flex justify-center items-center flex-col">
          <div>
            <Animtext refs={myRef} text="subscrube to the" size="21vw" />
          </div>
          <div
            className={`${style.footerText} w-full flex items-center justify-center`}
          >
            <Textsvg />
          </div>
          <div className="py-10 px-5 mt-20 w-full flex justify-between items-center">
            <p className="text-white uppercase font=[human] flex flex-col">
              <span>
                site by{" "}
                <a
                  href="https://www.linkedin.com/in/anesiani-nika-a282342a0/"
                  className=" underline"
                  target="blank"
                >
                  Nika Anesiani
                </a>{" "}
              </span>
              <span>desinger Joseph Berry</span>
            </p>
            <div className="text-white">
              <a href="#" className="uppercase ">
                Back to top
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
