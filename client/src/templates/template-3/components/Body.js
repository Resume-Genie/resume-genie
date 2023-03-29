import Education from "./Education";
import Skills from "./Skills";
import Others from "./Others";
import Certifiate from "./Certificate";
import Languages from "./Languages";

export default function Body({ data }) {
  return (
    <section className="flex justify-between mt-6">
      <section className="w-[560px]">
        <p className="text-[40px] font-bold ml-[102px]">EDUCATION</p>
        <Education data={data.education} />
        <Languages data={data.language} />
      </section>
      <section className="w-[700px]">
        <Skills data={data.skills} />
        <Others data={data.projects} />
        <Others data={data.internship} />
        <Certifiate data={data.certificate} />
        <Certifiate data={data.link} className="text-sky-400" />
      </section>
    </section>
  );
}
