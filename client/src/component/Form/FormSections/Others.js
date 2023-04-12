import { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Others = (props) => {
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
          Title Name
        </label>
      </div>

      <FormInput
        type={['text', 'text']}
        label={['', '']}
        htmlFor={['resume-other-1', 'resume-other-2']}
        placeholder={['', '']}
      />

      <FormInput
        type={['month', 'month']}
        label={['Start date', 'End date']}
        htmlFor={['resume-other-start', 'resume-other-end']}
        placeholder={['', '']}
      />

      <div>
        <label
          htmlFor="resume-other-summary"
          className="block mb-2 text-[16px]"
        >
          Summary
        </label>

        <textarea
          type="text"
          id="resume-other-summary"
          htmlFor="resume-other-summary"
          placeholder="Your Summary"
          className="border-solid border-[#F0F0F0] rounded-[5px] border w-full text-[16px] p-3 h-36"
        />
      </div>
    </>
  );

  const [addProject, setAddProject] = useState([<Template />]);

  const handleAddProject = () => {
    setAddProject([...addProject, <Template />]);
  };

  const closeHandler = (index) => {
    const newProject = [...addProject];
    newProject.splice(index, 1);
    setAddProject(newProject);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box overflow-y-auto c1">
        {addProject.map((project, i) => (
          <section
            className="rounded p-4 mb-4 bg-[var(--light)] relative"
            key={i}
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

            {project}
          </section>
        ))}

        <Button
          type="button"
          text="Add project"
          className="p-2 mt-4"
          onClick={handleAddProject}
        />
      </form>
    </>
  );
};

export default Others;
