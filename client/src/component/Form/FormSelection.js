import About from './FormSections/About';
import Experience from './FormSections/Experience';
import Projects from './FormSections/Projects';
import Skills from './FormSections/Skills';
import Certificates from './FormSections/Certificates';
import Education from './FormSections/Education';
import Others from './FormSections/Others';

const FormSelection = (props) => {
  let output = null;

  if (props.selection === 'About')
    output = <About title={props.formSections.About} />;
  else if (props.selection === 'Experience')
    output = <Experience title={props.formSections.Experience} />;
  else if (props.selection === 'Projects')
    output = <Projects title={props.formSections.Projects} />;
  else if (props.selection === 'Skills')
    output = <Skills title={props.formSections.Skills} />;
  else if (props.selection === 'Certificates')
    output = <Certificates title={props.formSections.Certificates} />;
  else if (props.selection === 'Education')
    output = <Education title={props.formSections.Education} />;
  else if (props.selection === 'Others')
    output = <Others title={props.formSections.Others} />;

  return <section className="p-4 border border-[var(--med)]">{output}</section>;
};

export default FormSelection;
