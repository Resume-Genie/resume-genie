import { useEffect, useState } from 'react';

import FormInput from '../FormInput';
import Button from '../../UI/Button';

import cross from './../../../assets/svg/dashboard/add-svg.svg';

import './ResumeForm.css';

const Others = (props) => {
  const title = props.title;
  const details = props.information.details;
  const [data, setData] = useState(details);
  const [change, setChange] = useState(false);

  const [heading, setHeading] = useState(title);
  const [title1, setTitle1] = useState(details[0].title);
  const [other1, setOther1] = useState(details[0].other1);
  const [other2, setOther2] = useState(details[0].other2);
  const [start, setStart] = useState(details[0].start);
  const [end, setEnd] = useState(details[0].end);
  const [summary, setSummary] = useState(details[0].summary);

  useEffect(() => {
    if (change) {
      props.setInformation((prev) => {
        return {
          ...prev,
          [title]: {
            ...prev[title],
            details: [
              ...data,
              {
                title: title1,
                other1: other1,
                other2: other2,
                start: start,
                end: end,
                summary: summary,
              },
            ],
          },
        };
      });
    } else {
      props.setInformation((prev) => {
        return {
          ...prev,
          [title]: {
            ...prev[title],
            details: [
              {
                title: title1,
                other1: other1,
                other2: other2,
                start: start,
                end: end,
                summary: summary,
              },
            ],
          },
        };
      });
    }
  }, [title1, other1, other2, start, end, summary]);

  const [addOther, setAddOther] = useState(['']);

  // const handleAddOther = () => {
  //   setAddOther([...addOther, '']);
  // };

  const closeHandler = (index) => {
    const newOther = [...addOther];
    newOther.splice(index, 1);
    setAddOther(newOther);
  };

  const handleSave = () => {
    if (change) {
      setData([
        ...data,
        {
          title: title1,
          other1: other1,
          other2: other2,
          start: start,
          end: end,
          summary: summary,
        },
      ]);
    } else {
      setData([
        {
          title: title1,
          other1: other1,
          other2: other2,
          start: start,
          end: end,
          summary: summary,
        },
      ]);
    }

    setChange(true);
  };

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {heading}
      </h1>

      <form action="" className="max-h-[515px] login-box  c1">
        {addOther.map((other, i) => (
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

            {i === 0 && (
              <div className="user-box relative">
                <input
                  type="text"
                  placeholder=""
                  required
                  className="w-full text-base text-black mb-6 bg-transparent pb-1 pt-2 border-none border-[var(--text)] outline-none"
                  onChange={(e) => setHeading(e.target.value)}
                  onFocus={(e) => {
                    e.target.placeholder = 'Ex- Internship';
                  }}
                  onBlur={(e) => {
                    e.target.value = title1;
                  }}
                />

                <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[10px]">
                  Heading
                </label>
              </div>
            )}

            <div className="user-box relative">
              <input
                type="text"
                placeholder=""
                required
                className="w-full text-base text-black mb-8 bg-transparent pb-1 pt-2 border-none border-[var(--text)] outline-none"
                onChange={(e) => setTitle1(e.target.value)}
                onFocus={(e) => {
                  e.target.placeholder = 'Ex- Where you did your internship';
                }}
              />

              <label className="absolute top-0 left-0 text-base text-black pointer-events-none py-[10px]">
                Title
              </label>
            </div>

            <FormInput
              type={['text', 'text']}
              label={['', '']}
              htmlFor={['resume-other-1', 'resume-other-2']}
              placeholder={['', '']}
              onStateChange={[setOther1, setOther2]}
              setFocus={[true, true]}
              value={[other1, other2]}
            />

            <FormInput
              type={['month', 'month']}
              label={['Start date', 'End date']}
              htmlFor={['resume-other-start', 'resume-other-end']}
              placeholder={['', '']}
              onStateChange={[setStart, setEnd]}
              setFocus={[true, true]}
              value={[start, end]}
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
                onChange={(e) => setSummary(e.target.value)}
                value={summary}
                onFocus={(e) => {
                  e.target.value = '';
                }}
              />
            </div>
          </section>
        ))}

        {/* <Button
          type="button"
          text="Add Title"
          className="p-2 my-4"
          onClick={handleAddOther}
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

export default Others;
