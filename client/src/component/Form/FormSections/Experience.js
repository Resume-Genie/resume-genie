import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Experience = (props) => {
  const Template = () => (
    <>
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
    </>
  );

  const [addExperience, setAddExperience] = useState([<Template />]);

  const handleAddExperience = () => {
    setAddExperience([...addExperience, <Template />]);
  };

  const closeHandler = (index) => {
    const newExperience = [...addExperience];
    newExperience.splice(index, 1);
    setAddExperience(newExperience);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box overflow-y-auto c1">
        {addExperience.map((experience, i) => (
          <section
            className="rounded p-4 mb-4 bg-[var(--light)] relative"
            key={i}
            data-index={i}
          >
            {i > 0 && (
              <button
                type="button"
                className="rotate-45 w-6 absolute top-2 right-3 z-10"
                onClick={() => closeHandler(i)}
              >
                <img src={cross} alt="" />
              </button>
            )}

            {experience}
          </section>
        ))}
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
