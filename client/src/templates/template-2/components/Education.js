import React from "react";
import Detail from "./Detail";
export default function Education(props) {
  return (
    <div>
      <h2 className="text-[#66cc99] text-[1.2vw] mb-[0.5vw]">EDUCATION</h2>
      <Detail data={props.data} />
    </div>
  );
}
