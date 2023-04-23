import Education from "./Education";
import Skills from "./Skills";
import Others from "./Others";
import Certifiate from "./Certificate";
import Languages from "./Languages";
import Link from "./Link";

export default function Body({ data }) {
  return (
    <section className="flex justify-between mt-6 w-max">
      <section className="w-[35%]">
        <p className="text-[3.4vh] font-bold ml-[10vh]">EDUCATION</p>
        <Education data={data.education} />
        <Languages data={data.language} />
      </section>
      <section className="w-[65%] ">
        <Skills data={data.skills} />
        <Others data={data.projects} />
        <Others data={data.internship} />
        <Certifiate data={data.certificate} />
        <Link data={data.link} />
      </section>
    </section>
  );
}
