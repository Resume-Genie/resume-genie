import { useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assets/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Projects = (props) => {
  const details = props.information.details;
  const [data, setData] = useState(details);
  const [change, setChange] = useState(false);

  const [projectName, setProjectName] = useState(details[0].name);
  const [start, setStart] = useState(details[0].start);
  const [end, setEnd] = useState(details[0].end);
  const [summary, setSummary] = useState(details[0].description);

  const [addProject, setAddProject] = useState(['']);

  // const handleAddProject = () => {
  //   setAddProject([...addProject, '']);
  // };

  const closeHandler = (index) => {
    const newProject = [...addProject];
    newProject.splice(index, 1);
    setAddProject(newProject);
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
        {props.title}
      </h1>

      <form action="" className="max-h-[515px] login-box c1">
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

            <div className="user-box relative">
              <input
                type="text"
                name=""
                required
                className="w-full text-base text-black mb-8 bg-transparent pt-4 pb-1 border-none border-[var(--text)] outline-none"
                onChange={(e) => setProjectName(e.target.value)}
                value={projectName}
                onFocus={(e) => {
                  e.target.value = '';
                }}
                onBlur={(e) => {
                  e.target.value = projectName;
                }}
              />

              <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[14px]">
                Project Name
              </label>
            </div>

            <FormInput
              type={['month', 'month']}
              label={['Start date', 'End date']}
              htmlFor={['resume-project-start', 'resume-project-end']}
              placeholder={['', '']}
              onStateChange={[setStart, setEnd]}
              value={[start, end]}
              setFocus={[true, true]}
            />

            <div>
              <label
                htmlFor="resume-project-summary"
                className="block mb-2 text-[16px]"
              >
                What did you do?
              </label>

              <textarea
                type="text"
                id="resume-project-summary"
                htmlFor="resume-project-summary"
                placeholder="Your Summary"
                className="border-solid border-[#F0F0F0] rounded-[5px] border w-full text-[16px] p-3 h-36"
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
                onFocus={(e) => {
                  e.target.value = '';
                }}
                onBlur={(e) => {
                  e.target.value = summary;
                }}
              />
            </div>
          </section>
        ))}

        {/* <Button
          type="button"
          text="Add project"
          className="p-2 my-4"
          onClick={handleAddProject}
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

export default Projects;
