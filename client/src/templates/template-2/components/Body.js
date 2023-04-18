import React from "react";
import About from "./Body";

const Body = ({data}) => {
  return(
    <div className="flex w-[100%]">
      <section className="w-[50%]">
      <About data={data.info}/>
      </section>
      <section>

      </section>
    </div>
  )
};

export default Body;
