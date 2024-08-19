import React, { useRef } from "react";
import Events from "../small/events/Events";
import About from "../about/About";
import Party from "../party/Party";

function Mian() {
  return (
    <div className="w-full bg-[#1c1c1c] pt-14 relative">
      <Events />
      <About />
      <Party />
    </div>
  );
}
export default Mian;
