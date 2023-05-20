import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Input from '../../UI/Input';
import Button from '../../UI/Button';

import cross from './../../../assets/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Education = (props) => {
  const details = props.information.details;
  const [data, setData] = useState(details);
  const [change, setChange] = useState(false);

  const [heading, setHeading] = useState(details[0].name);
  const [degree, setDegree] = useState(details[0].degree);
  const [field, setField] = useState(details[0].field);
  const [start, setStart] = useState(details[0].start);
  const [end, setEnd] = useState(details[0].end);
  const [grade, setGrade] = useState(details[0].grade);

  useEffect(() => {
    if (change) {
      props.setInformation((prev) => ({
        ...prev,
        [props.title]: {
          ...prev[props.title],
          details: [
            ...data,
            {
              name: heading,
              degree: degree,
              field: field,
              start: start,
              end: end,
              grade: grade,
            },
          ],
        },
      }));
    } else {
      props.setInformation((prev) => ({
        ...prev,
        [props.title]: {
          ...prev[props.title],
          details: [
            {
              name: heading,
              degree: degree,
              field: field,
              start: start,
              end: end,
              grade: grade,
            },
          ],
        },
      }));
    }
  }, [heading, degree, field, start, end, grade]);

  useEffect(() => {
    props.setInformation((prev) => ({
      ...prev,
      [props.title]: {
        ...prev[props.title],
        details: data,
      },
    }));
  }, [data]);

  const [addEducation, setAddEducation] = useState(['']);

  // const handleAddEducation = () => {
  //   setAddEducation([...addEducation, '']);
  // };

  const closeHandler = (index) => {
    const newEducation = [...addEducation];
    newEducation.splice(index, 1);
    setAddEducation(newEducation);
  };

  const handleSave = () => {
    if (change) {
      setData([
        ...data,
        {
          name: heading,
          degree: degree,
          field: field,
          start: start,
          end: end,
          grade: grade,
        },
      ]);
    } else {
      setData([
        {
          name: heading,
          degree: degree,
          field: field,
          start: start,
          end: end,
          grade: grade,
        },
      ]);
    }

    setChange(true);
  };

  return (
    <>
      {/* <div className="flex justify-between items-start"> */}
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
      </h1>

      {/* <Button
        type="button"
        text="Add Education"
        className="p-2"
        onClick={handleSave}
      /> */}

      {/* </div> */}

      <form action="" className="max-h-[515px] login-box  c1">
        {addEducation.map((education, i) => (
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
                onChange={(e) => {
                  setHeading(e.target.value);
                }}
                value={heading}
                onFocus={(e) => {
                  e.target.value = '';
                }}
                onBlur={(e) => {
                  e.target.value = heading;
                }}
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
              onStateChange={[setDegree, setField]}
              value={[degree, field]}
              setFocus={[true, true]}
            />

            <FormInput
              type={['month', 'month']}
              label={['Start date', 'End date (Expected)']}
              htmlFor={['resume-education-start', 'resume-education-end']}
              placeholder={['', '']}
              onStateChange={[setStart, setEnd]}
              value={[start, end]}
              setFocus={[true, true]}
            />

            <Input
              key="grade"
              type="text"
              label="Grade"
              htmlFor="resume-education-grade"
              placeholder="Your Grade"
              className="block mb-2 text-[16px]"
              inputCon="w-[270px]"
              inputCn="p-3"
              onStateChange={setGrade}
              value={grade}
              setFocus={true}
            />
          </section>
        ))}
        {/* 
        <Button
          type="button"
          text="Add Education"
          className="p-2 my-4"
          onClick={handleAddEducation}
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

export default Education;
