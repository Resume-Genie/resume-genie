import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Input from '../../UI/Input';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Education = (props) => {
  const [addEducation, setAddEducation] = useState([]);

  const Template = () => (
    <section className="rounded p-4 mb-4 bg-[var(--light)] relative">
      {addEducation.length > 0 && (
        <button
          type="button"
          className="rotate-45 w-6 absolute top-2 right-3 z-10"
        >
          <img src={cross} alt="" />
        </button>
      )}

      <div className="user-box relative">
        <input
          type="text"
          name=""
          required
          className="w-full text-base text-black mb-8 bg-transparent py-[10px] border-none border-[var(--text)] outline-none"
        />

        <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[14px]">
          College / School Name
        </label>
      </div>

      <FormInput
        type={['text', 'text']}
        label={['Your Major / Degree', 'Field of Study']}
        htmlFor={['resume-education-degree', 'resume-education-Field']}
        placeholder={['Bachelor in Technology', 'Computer Science']}
      />

      <FormInput
        type={['month', 'month']}
        label={['Start date', 'End date (Expected)']}
        htmlFor={['resume-education-start', 'resume-education-end']}
        placeholder={['', '']}
      />

      <Input
        key="grade"
        type="text"
        label="Grade"
        htmlFor="resume-education-passing"
        placeholder="Your Grade"
        className="block mb-2 text-[16px]"
        inputCon="w-[270px]"
        inputCn="p-3"
      />
    </section>
  );

  useEffect(() => {
    setAddEducation([<Template key={addEducation.length + 1} />]);
  }, []);

  const handleAddEducation = () => {
    setAddEducation([
      ...addEducation,
      <Template key={addEducation.length + 1} />,
    ]);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box overflow-y-auto c1">
        {addEducation}

        <Button
          type="button"
          text="Add Education"
          className="p-2 mt-4"
          onClick={handleAddEducation}
        />
      </form>
    </>
  );
};

export default Education;
