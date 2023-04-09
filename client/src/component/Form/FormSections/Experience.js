import { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import './ResumeForm.css';

const Experience = (props) => {
  const Template = () => (
    <section className="rounded p-4 mb-4 bg-[var(--light)]">
      <div className="user-box relative">
        <input
          type="text"
          name=""
          required
          className="w-full text-base text-black mb-8 bg-transparent py-[10px] border-none border-[var(--text)] outline-none"
        />

        <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[14px]">
          Company Name
        </label>
      </div>

      <FormInput
        type={['text', 'text']}
        label={['Your Role', 'Location']}
        htmlFor={['resume-experience-role', 'resume-experience-location']}
        placeholder={['Software Engineer', 'Your College Location']}
      />

      <FormInput
        type={['month', 'month']}
        label={['Year of Joining', 'Year of Leaving']}
        htmlFor={['resume-experience-joining', 'resume-experience-leaving']}
        placeholder={['', '']}
      />

      <div>
        <label
          htmlFor="resume-experience-summary"
          className="block mb-2 text-[16px]"
        >
          What did you do?
        </label>

        <textarea
          type="text"
          id="resume-experience-summary"
          htmlFor="resume-experience-summary"
          placeholder="Your Summary"
          className="border-solid border-[#F0F0F0] rounded-[5px] border w-full text-[16px] p-3 h-36"
        />
      </div>
    </section>
  );

  const [addExperience, setAddExperience] = useState([<Template />]);

  const handleAddExperience = () => {
    setAddExperience([...addExperience, <Template />]);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box overflow-y-auto c1">
        {addExperience}
        <Button
          type="button"
          text="Add Experience"
          className="p-2 mt-4"
          onClick={handleAddExperience}
        />
      </form>
    </>
  );
};

export default Experience;