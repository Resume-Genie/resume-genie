import Education from "./Education";
import Skills from "./Skills";
import Others from "./Others"

export default function Body({ data }) {
  return (
    <section className="flex justify-between mt-6">
      <section className="w-[560px]">
        <p className="text-[40px] font-bold ml-[102px]">EDUCATION</p>
        <Education data={data.education} />
      </section>
      <section className="w-[600px]">
        <Skills data={data.skills}/>
        <section className="mt-10">
        <Others data={data.projects} />
      </section>
      </section>
      
    </section>
  );
}
