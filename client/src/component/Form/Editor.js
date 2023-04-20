import { useState } from 'react';

import FormButton from './FormButton';
import FormSelection from './FormSelection';

const Editor = ({ formSections, setResumeInformation, resumeInformation }) => {
  const [selection, setSelection] = useState('About');

  return (
    <section className="w-1/2 h-full login-box">
      <ul className="flex flex-wrap mb-5">
        <FormButton
          sections={Object.keys(formSections)}
          setSelection={setSelection}
        />
      </ul>

      <FormSelection
        formSections={formSections}
        selection={selection}
        information={resumeInformation}
        setResumeInformation={setResumeInformation}
      />
    </section>
  );
};

export default Editor;
