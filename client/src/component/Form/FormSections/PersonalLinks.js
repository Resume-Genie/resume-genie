import { useState } from 'react';

import Button from '../../UI/Button';
import FormInput from '../FormInput';

import './ResumeForm.css';

const PersonalLinks = (props) => {
  const [inputList, setInputList] = useState([
    <FormInput
      type={['url', 'url']}
      label={['Portfolio', 'Github']}
      htmlFor={['resume-link-portfolio', 'resume-link-github']}
      placeholder={['Your Personal Website', 'Your Github Profile']}
    />,
  ]);

  const handleAddLinks = () =>
    setInputList((prev) => [
      ...prev,
      <FormInput
        type={['url', 'url']}
        label={['Link', 'Link']}
        htmlFor={[
          'resume-link-' + inputList.length,
          'resume-link-' + inputList.length + 1,
        ]}
        placeholder={['Your Link', 'Your Link']}
      />,
    ]);

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form
        action=""
        className="px-4 max-h-[515px] login-box overflow-y-auto c1"
      >
        {inputList}

        <Button
          type="button"
          text="Add More Links"
          className="p-2 mt-4"
          onClick={handleAddLinks}
        />
      </form>
    </>
  );
};

export default PersonalLinks;
