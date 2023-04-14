import { useState } from 'react';

import Input from '../../UI/Input';
import Button from '../../UI/Button';

import './ResumeForm.css';

const Skills = (props) => {
  const [skillList, setSkillList] = useState([
    <Input
      key={0}
      type="text"
      label="Skill 1"
      htmlFor="resume-skill-0"
      placeholder="Your Skill"
      className="block mb-2 text-[16px]"
      inputCon="w-[270px]"
      inputCn="p-3"
    />,
  ]);

  const handleAddLinks = () =>
    setSkillList((prev) => [
      ...prev,
      <Input
        key={prev.length}
        type="text"
        label={'Skill ' + (prev.length + 1)}
        htmlFor={'resume-skill-' + prev.length}
        placeholder="Your Skill"
        className="block mb-2 text-[16px]"
        inputCon="w-[270px]"
        inputCn="p-3"
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
        <section className="grid grid-cols-2">
          {skillList.map((skill) => skill)}
        </section>

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

export default Skills;
