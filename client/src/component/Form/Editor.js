import { useState } from 'react';

import FormButton from './FormButton';
import FormSelection from './FormSelection';

const Editor = () => {
  const [selection, setSelection] = useState('About');

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

  return (
    // <section className="w-1//2">
    <section>
      <ul className="flex flex-wrap mb-5">
        <FormButton
          sections={Object.keys(formSections)}
          setSelection={setSelection}
        />
      </ul>

      <FormSelection formSections={formSections} selection={selection} />
    </section>
  );
};

export default Editor;
