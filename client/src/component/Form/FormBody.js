import { useState } from 'react';

import Editor from '../../component/Form/Editor';
import LiveResume from '../../component/Form/LiveResume';

const FormBody = () => {
  const formSections = {
    About: 'Basic Info',
    Links: 'Personal Links',
    Experience: 'Work Experience',
    Projects: 'Projects',
    Education: 'Education',
    Skills: 'Skills',
    Certificates: 'Certificates',
    Others: 'Others',
  };

  const [resumeInformation, setResumeInformation] = useState({
    [formSections.About]: {
      id: formSections.About,
      sectionTitle: formSections.About,
      detail: {
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        role: '',
        dob: '',
        summary: '',
      },
    },
    [formSections.Links]: {
      id: formSections.Links,
      sectionTitle: formSections.Links,
      details: [],
    },
    [formSections.Experience]: {
      id: formSections.Experience,
      sectionTitle: formSections.Experience,
      details: [],
    },
    [formSections.Projects]: {
      id: formSections.Projects,
      sectionTitle: formSections.Projects,
      details: [],
    },
    [formSections.Education]: {
      id: formSections.Education,
      sectionTitle: formSections.Education,
      points: [],
    },
    [formSections.Skills]: {
      id: formSections.Skills,
      sectionTitle: formSections.Skills,
      detail: [],
    },
    [formSections.Certificates]: {
      id: formSections.Certificates,
      sectionTitle: formSections.Certificates,
      detail: [],
    },
    [formSections.Others]: {
      id: formSections.Others,
      sectionTitle: formSections.Others,
      detail: [],
    },
  });

  return (
    <section className="p-9 flex w-[calc(100%-55px)] h-[100vh]">
      <Editor
        formSections={formSections}
        resumeInformation={resumeInformation}
        setResumeInformation={setResumeInformation}
      />
      <LiveResume information={resumeInformation} />
    </section>
  );
};

export default FormBody;
