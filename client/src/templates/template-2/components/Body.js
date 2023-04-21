import Education from "./Education";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Languages from "./Languages";
import Link from "./Link";
import Others from "./Others";
import Certificate from "./Certificate";

const Body = ({ data }) => {
  return (
    <div className="flex w-[100%] font-sans">
      <section className="w-[30%]">
        <About data={data.info} />
        <Skills data={data.skills} />
        <div className="mt-[1vw]">
          <Languages data={data.language} />
          <Link data={data.link} />
        </div>
      </section>
      <section className="w-[70%] text-[#9099a0] bg-[#3d3e42] pt-[3vw] pr-[3vw] pb-[2vw] pl-[2vw] ml-[2vw]">
        <Experience data={data.experience} />
        <div className="mt-[-1.2vw]">
          <Others data={data.projects} />
        </div>
        <div className="mt-[2vw]">
          <Education data={data.education} />
        </div>
        <div className="mt-[-1vw]">
          <Certificate data={data.certificate} />
        </div>
      </section>
    </div>
  );
};

export default Body;
