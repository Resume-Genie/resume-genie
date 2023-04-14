import { useState } from 'react';

import Input from '../../UI/Input';
import Button from '../../UI/Button';

import './ResumeForm.css';

const PersonalLinks = (props) => {
  const [inputList, setInputList] = useState([
    <Input
      key={0}
      type="text"
      label="Portfolio"
      htmlFor="resume-link-0"
      placeholder="Your Personal Portfolio"
      className="block mb-2 text-[16px]"
      inputCon="w-[270px]"
      inputCn="p-3"
    />,
  ]);

  const handleAddLinks = () =>
    setInputList((prev) => [
      ...prev,
      <Input
        key={prev.length}
        type="text"
        label="Link"
        htmlFor={'resume-link-' + prev.length}
        placeholder="Your Link"
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
          {inputList.map((input) => input)}
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

export default PersonalLinks;
