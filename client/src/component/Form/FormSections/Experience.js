import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assests/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Experience = (props) => {
  const title = props.title;
  const details = props.information.details;
  const [data, setData] = useState(details);
  const [change, setChange] = useState(false);

  const [companyName, setCompanyName] = useState(details.company);
  const [role, setRole] = useState(details.role);
  const [location, setLocation] = useState(details.location);
  const [joining, setJoining] = useState(details.joining);
  const [leaving, setLeaving] = useState(details.leaving);
  const [summary, setSummary] = useState(details.description);

  const [addExperience, setAddExperience] = useState(['']);

  // const handleAddExperience = () => {
  //   setAddExperience([...addExperience, '']);
  // };

  const closeHandler = (index) => {
    const newExperience = [...addExperience];
    newExperience.splice(index, 1);
    setAddExperience(newExperience);
  };

  const handleSave = () => {
    if (change) {
      setData([]);
    } else {
      setData([]);
    }

    setChange(true);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {title}
      </h1>

      <form action="" className="max-h-[515px] login-box c1">
        {addExperience.map((experience, index) => (
          <section
            className="rounded p-4 mb-4 bg-[var(--light)] relative"
            key={index}
          >
            {index > 0 && (
              <button
                type="button"
                className="rotate-45 w-6 absolute top-2 right-3 z-10"
                onClick={() => closeHandler(index)}
              >
                <img src={cross} alt="" />
              </button>
            )}

            <div className="user-box relative">
              <input
                type="text"
                required
                className="w-full text-base text-black mb-8 bg-transparent pt-4 pb-1 border-none border-[var(--text)] outline-none"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                onFocus={(e) => {
                  e.target.value = '';
                }}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    e.target.value = companyName;
                  }
                }}
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
              onStateChange={[setRole, setLocation]}
              setFocus={[true, true]}
              value={[role, location]}
            />

            <FormInput
              type={['month', 'month']}
              label={['Year of Joining', 'Year of Leaving']}
              htmlFor={[
                'resume-experience-joining',
                'resume-experience-leaving',
              ]}
              placeholder={['', '']}
              onStateChange={[setJoining, setLeaving]}
              value={[joining, leaving]}
              setFocus={[true, true]}
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
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
                onFocus={(e) => {
                  e.target.value = '';
                }}
                onBlur={(e) => {
                  if (e.target.value === '') {
                    e.target.value = summary;
                  }
                }}
              />
            </div>
          </section>
        ))}

        {/* <Button
          type="button"
          text="Add Experience"
          className="p-2 my-4"
          onClick={handleAddExperience}
        /> */}
        <Button
          type="button"
          text="Add Education"
          className="p-2"
          onClick={handleSave}
        />
      </form>
    </>
  );
};

export default Experience;
