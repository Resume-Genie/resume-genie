import Step1 from '../../assests/svg/home/step1.svg';
import Step2 from '../../assests/svg/home/step2.svg';
import Step3 from '../../assests/svg/home/step3.svg';
import Step4 from '../../assests/svg/home/step4.svg';
import Step from './Step';

const Steps = () => {
  const steps = [
    {
      id: 1,
      title: 'Pick the perfect template today',
      description:
        'Your resume is your chance to make a great first impression, and having a well-designed, visually appealing template is essential to standing out from the crowd. With our resume builder, with just a few clicks, you can choose the perfect template to make your resume shine.',
      img: Step1,
    },
    {
      id: 2,
      title: 'Personalize you Template',
      description:
        'Every job seeker is unique, and your resume should reflect your individual skills, experience, and personality. With our resume builder, you can easily personalize your design to create a resume that truly stands out. Our user-friendly interface makes it easy to customize your design.',
      img: Step2,
    },
    {
      id: 3,
      title: 'Enter your information with personal touch',
      description:
        "Entering your information is a crucial step in building a great resume, but it doesn't have to be a tedious or time-consuming process. Our platform guides you through the process step-by-step, prompting you to enter your education, work experience, skills, and other relevant details. You can also save your progress and return to the form at any time to finish entering your information.",
      img: Step3,
    },
    {
      id: 4,
      title: 'Hit the Download Button!',
      description:
        "After you've completed your resume, it's time to download it and share it with potential employers. With our resume builder, downloading your resume is a quick and easy process. Simply click the 'Download' button and your resume will be saved in the format you chose. Our platform also allows you to save multiple versions of your resume, so you can tailor your application to specific job opportunities.",
      img: Step4,
    },
  ];

  return (
    <section className="max-w-[1376px] mx-auto">
      <h2 className="text-[52px] text-white font-bold tracking-[0.08em] mb-9 heading max-w-[700px]">
        Build your dream resume in a snap
      </h2>

      <section className="grid grid-cols-12 grid-rows-4 gap-x-5 gap-y-16 relative">
        {steps.map((step) => (
          <Step
            key={step.id}
            id={step.id}
            title={step.title}
            description={step.description}
            img={step.img}
          />
        ))}
        <div className="text-[210px] font-extrabold text-[var(--primary-green)] absolute rotate-90 whitespace-nowrap top-2/4 left-2/4 -z-10 opacity-30 -translate-x-2/4 -translate-y-2/4">
          RESUME GENIE
        </div>
      </section>
    </section>
  );
};

export default Steps;
