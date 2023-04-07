import Input from '../../UI/Input';

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
        <div className="flex justify-between">
          <Input
            type="text"
            label="Name"
            labelFor="about-name"
            placeholder="Your Name"
            className="block mb-2 text-[18px]"
            inputCon="w-[270px]"
            inputCn="p-3"
          />

          <Input
            type="text"
            label="Role"
            labelFor="about-role"
            placeholder="Your Job Role"
            className="block mb-2 text-[18px]"
            inputCon="w-[270px]"
            inputCn="p-3"
          />
        </div>

        <div className="flex justify-between">
          <Input
            type="email"
            label="Email"
            labelFor="about-email"
            placeholder="Your Email"
            className="block mb-2 text-[18px]"
            inputCon="w-[270px]"
            inputCn="p-3"
          />

          <Input
            type="number"
            label="Phone Number"
            labelFor="about-number"
            placeholder="Your Phone Number"
            className="block mb-2 text-[18px]"
            inputCon="w-[270px]"
            inputCn="p-3"
          />
        </div>
      </form>
    </>
  );
};

export default About;
