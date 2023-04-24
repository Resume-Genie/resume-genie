import Education from './Education';
import Skills from './Skills';
import Others from './Others';
import Certifiate from './Certificate';
import Languages from './Languages';
import Link from './Link';
import Experience from '../../../component/Form/FormSections/Experience';

export default function Body({ data, information }) {
  return (
    <section className="flex justify-between mt-6 w-max">
      <section className="w-[35%]">
        <p className="text-[3.4vh] font-bold ml-[10vh]">EDUCATION</p>
        <Education data={data.education} information={information.Education} />
        <Languages data={data.language} information={information.Education} />
      </section>
      <section className="w-[65%] ">
        <Skills data={data.skills} information={information.Skills} />
        <Others data={data.projects} information={information.Projects} />
        <Others
          data={data.internship}
          information={information['Work Experience']}
        />
        <Certifiate
          data={data.certificate}
          information={information.Certificates}
        />
        <Link data={data.link} information={information['Personal Links']} />
      </section>
    </section>
  );
}
