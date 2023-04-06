import { useState } from 'react';

import FormButton from './FormButton';
import FormSelection from './FormSelection';

const Editor = () => {
  const [selection, setSelection] = useState('About');

  const formSections = {
    About: 'Basic Info',
    Experience: 'Work Experience',
    Projects: 'Projects',
    Education: 'Education',
    Skills: 'Skills',
    Certificates: 'Certificates',
    Others: 'Others',
  };

  return (
    <section>
      <ul className="flex mb-8">
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
