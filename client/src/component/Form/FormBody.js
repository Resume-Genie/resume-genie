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
        id: '1',
        name: 'Gautam Raj',
        email: 'a@resume-genie.com',
        number: '1234567890',
        location: 'abc, India',
        role: 'Web Developer',
        dob: '2000-01-01',
        summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
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
      details: {
        id: '1',
        company: 'Google',
        role: 'SDE 1',
        location: 'Bangalore, India',
        startDate: '2000-01',
        endDate: '2000-01',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      },
    },
    [formSections.Projects]: {
      id: formSections.Projects,
      sectionTitle: formSections.Projects,
      details: [
        {
          id: '1',
          name: 'Resume Genie',
          start: '2000-01',
          end: '2000-01',
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit',
        },
      ],
    },
    [formSections.Education]: {
      id: formSections.Education,
      sectionTitle: formSections.Education,
      details: [
        {
          id: '1',
          name: 'ABC University',
          degree: 'B.Tech',
          field: 'Computer Science',
          start: '2000-01',
          end: '2000-01',
          grade: '9.5',
        },
      ],
    },
    [formSections.Skills]: {
      id: formSections.Skills,
      sectionTitle: formSections.Skills,
      details: [],
    },
    [formSections.Certificates]: {
      id: formSections.Certificates,
      sectionTitle: formSections.Certificates,
      details: [
        {
          id: '1',
          certificateName: 'Abc',
          organization: 'Google',
          issueDate: '2000-01',
          expirationDate: '2000-01',
          credentialId: '1234567890',
        },
      ],
    },
    [formSections.Others]: {
      id: formSections.Others,
      sectionTitle: formSections.Others,
      details: [
        {
          id: '1',
          title: 'Internship',
          other1: 'Ex-Company',
          other2: 'Ex-Role',
          start: '2000-01',
          end: '2000-01',
          summart: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ],
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
