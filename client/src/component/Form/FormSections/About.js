import { useEffect, useState } from 'react';

import FormInput from '../FormInput';

import './ResumeForm.css';

const About = (props) => {
  const title = props.title;
  const [name, setName] = useState(props.information.name);
  const [role, setRole] = useState(props.information.role);
  const [email, setEmail] = useState(props.information.email);
  const [number, setNumber] = useState(props.information.number);
  const [location, setLocation] = useState(props.information.location);
  const [dob, setDob] = useState(props.information.dob);
  const [summary, setSummary] = useState(props.information.summary);

  console.log(title);
  // console.log(props.information[title].detail.name);
  props.information[title].detail.name = 'Gautam Raj';
  // console.log(props.information[title].detail.name);
  useEffect(() => {
    props.setInformation((prev) => {
      return {
        ...prev,
        [title]: {
          ...prev[title],
          detail: {
            name: name,
            role: role,
            email: email,
            number: number,
            location: location,
            dob: dob,
            summary: summary,
          },
        },
      };
    });
  }, [name, role, email, number, location, dob, summary]);

  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {title}
      </h1>

      <form
        action=""
        className="px-4 max-h-[515px] login-box overflow-y-auto c1"
      >
        <FormInput
          type={['text', 'text']}
          label={['Name', 'Role']}
          htmlFor={['resume-about-name', 'resume-about-role']}
          placeholder={['Your Name', 'Your Job Role']}
          onChange={[setName, setRole]}
          value={[name, role]}
        />

        <FormInput
          type={['email', 'number']}
          label={['Email', 'Phone Number']}
          htmlFor={['resume-about-email', 'resume-about-number']}
          placeholder={['Your Email', 'Your Phone Number']}
          onChange={[setEmail, setNumber]}
          value={[email, number]}
        />

        <FormInput
          type={['text', 'date']}
          label={['location', 'DOB']}
          htmlFor={['resume-about-location', 'resume-about-dob']}
          placeholder={['Your Location', '']}
          onChange={[setLocation, setDob]}
          value={[location, dob]}
        />

        <div>
          <label
            htmlFor="resume-about-summary"
            className="block mb-2 text-[16px]"
          >
            Summary
          </label>

          <textarea
            type="text"
            id="resume-about-summary"
            htmlFor="resume-about-summary"
            placeholder="Your Summary"
            className="border-solid border-[#F0F0F0] rounded-[5px] border w-full text-[16px] p-3 h-36"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default About;
