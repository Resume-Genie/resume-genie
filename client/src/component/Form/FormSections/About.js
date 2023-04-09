import FormInput from '../FormInput';

import './ResumeForm.css';

const About = (props) => {
  return (
    <>
      <h1 className="text-[36px] font-bold text-[text-var(--text)] mb-5">
        {props.title}
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
        />

        <FormInput
          type={['email', 'number']}
          label={['Email', 'Phone Number']}
          htmlFor={['resume-about-email', 'resume-about-number']}
          placeholder={['Your Email', 'Your Phone Number']}
        />

        <FormInput
          type={['text', 'date']}
          label={['location', 'DOB']}
          htmlFor={['resume-about-location', 'resume-about-dob']}
          placeholder={['Your Location', '']}
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
          />
        </div>
      </form>
    </>
  );
};

export default About;
