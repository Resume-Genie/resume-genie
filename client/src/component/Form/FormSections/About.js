import { useEffect, useState } from 'react';

import FormInput from '../FormInput';

import './ResumeForm.css';

const About = (props) => {
  const title = props.title;
  const details = props.information.detail;

  const [name, setName] = useState(details.name);
  const [role, setRole] = useState(details.role);
  const [email, setEmail] = useState(details.email);
  const [number, setNumber] = useState(details.number);
  const [location, setLocation] = useState(details.location);
  const [dob, setDob] = useState(details.dob);
  const [summary, setSummary] = useState(details.summary);

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

      <form action="" className="px-4 max-h-[515px] login-box c1">
        <FormInput
          type={['text', 'text']}
          label={['Name', 'Role']}
          htmlFor={['resume-about-name', 'resume-about-role']}
          placeholder={['Your Name', 'Your Job Role']}
          onStateChange={[setName, setRole]}
          setFocus={[true, true]}
          value={[name, role]}
        />

        <FormInput
          type={['email', 'number']}
          label={['Email', 'Phone Number']}
          htmlFor={['resume-about-email', 'resume-about-number']}
          placeholder={['Your Email', 'Your Phone Number']}
          onStateChange={[setEmail, setNumber]}
          setFocus={[true, true]}
          value={[email, number]}
        />

        <FormInput
          type={['text', 'date']}
          label={['location', 'DOB']}
          htmlFor={['resume-about-location', 'resume-about-dob']}
          placeholder={['Your Location', '']}
          onStateChange={[setLocation, setDob]}
          setFocus={[true, true]}
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
            onFocus={(e) => {
              e.target.value = '';
            }}
          />
        </div>
      </form>
    </>
  );
};

export default About;
