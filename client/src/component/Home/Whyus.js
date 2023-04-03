import edit from '../../assests/svg/home/WhyUs/edit.svg';
import free from '../../assests/svg/home/WhyUs/free.svg';
import noCharges from '../../assests/svg/home/WhyUs/no-charges.svg';
import template from '../../assests/svg/home/WhyUs/template.svg';

const Whyus = () => {
  const elements = [
    {
      title: 'Completely free of charge',
      description:
        'With our resume builder, you can create a professional resume at absolutely no cost. Unlike other resume building services that require expensive subscriptions or offer only limited free trials, our platform is completely free to use forever. You can create and download as many resumes as you need without ever worrying about hidden fees or costs.',
      img: free,
    },
    {
      title: 'Standout resume templates',
      description:
        "A great resume can set you apart from other applicants and help you land your dream job. That's why we offer a variety of creative and professional resume templates that are designed to impress recruiters and hiring managers. Our templates are fully customizable, allowing you to adjust the layout, font, colors, and more to suit your personal style and preferences.",
      img: template,
    },
    {
      title: 'Make changes on the fly',
      description:
        "We believe in transparency and honesty when it comes to pricing. That's why we never charge hidden fees or surprise our users with unexpected costs. Our pricing is completely upfront and transparent, so you can be confident that there are no hidden fees or costs associated with our resume builder. You can create and download your resume without worrying about any additional expenses or subscription fees.",
      img: edit,
    },
    {
      title: 'No surprises or hidden costs',
      description:
        'Creating a great resume is an ongoing process, and sometimes you need to make changes on the fly. With our resume builder, you can edit your resume in real time, allowing you to make updates and refinements as you go. Our user-friendly interface makes it easy to edit and refine your resume, and you can see the changes you make in real time.',
      img: noCharges,
    },
  ];

  return (
    <section className="max-w-[1376px] mx-auto mt-20 mb-5" id="whyus">
      <h2 className="text-[52px] text-white font-bold tracking-[0.08em] heading max-w-[800px] mb-20 prevent-select">
        Why use The Resume Genie Resume Builder?
      </h2>

      <section className="grid grid-cols-2 grid-rows-2 gap-y-16">
        {elements.map((element, i) => (
          <section
            className={
              'flex max-w-[636px ' + (i % 2 !== 0 ? 'justify-self-end' : null)
            }
            key={element.title}
          >
            <div>
              <img src={element.img} alt="" />
            </div>

            <div className="max-w-[520px] ml-9">
              <h3 className="text-white font-bold mb-9 text-[28px] tracking-[0.08em] max-w-[270px]">
                {element.title}
              </h3>
              <p className="text-white text-[18px] tracking-widest leading-8">
                {element.description}
              </p>
            </div>
          </section>
        ))}
      </section>
    </section>
  );
};

export default Whyus;
