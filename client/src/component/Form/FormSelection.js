import About from './FormSections/About';
import PersonalLinks from './FormSections/PersonalLinks';
import Experience from './FormSections/Experience';
import Projects from './FormSections/Projects';
import Skills from './FormSections/Skills';
import Certificates from './FormSections/Certificates';
import Education from './FormSections/Education';
import Others from './FormSections/Others';

import './FormSections/ResumeForm.css';

const FormSelection = (props) => {
  let output = null;
  const title = props.formSections[props.selection];

  if (props.selection === 'About')
    output = (
      <About
        title={title}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Links')
    output = (
      <PersonalLinks
        title={props.formSections.Links}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Experience')
    output = (
      <Experience
        title={props.formSections.Experience}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Projects')
    output = (
      <Projects
        title={props.formSections.Projects}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Skills')
    output = (
      <Skills
        title={props.formSections.Skills}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Certificates')
    output = (
      <Certificates
        title={props.formSections.Certificates}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Education')
    output = (
      <Education
        title={props.formSections.Education}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );
  else if (props.selection === 'Others')
    output = (
      <Others
        title={props.formSections.Others}
        information={props.information[title]}
        setInformation={props.setResumeInformation}
      />
    );

  return (
    <section className="h-[calc(100%-90px)] overflow-y-auto p-4 border border-[var(--med)] login-box">
      {output}
    </section>
  );
};

export default FormSelection;
