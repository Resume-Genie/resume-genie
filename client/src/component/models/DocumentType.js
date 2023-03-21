import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

import Button from '../Button';

const DocumentType = (props) => {
  const navigate = useNavigate();

  const onFreshClick = () => {
    navigate('/form/createResume');
  };

  const onRevampClick = () => {
    props.setModelNumber(2);
  };

  const lists = [
    {
      title: 'Starting Fresh',
      rec: '(Recommended)',
      text: 'Create your best resume yet by following our easy step-by-step process, section by section. Tailor your resume to your unique skills and experiences to make a great impression on potential employers.',
      function: onFreshClick,
    },
    {
      title: 'Revamp Your Old Resume',
      rec: '',
      text: 'Already have a resume, but want to update it with a fresh new look? Our resume builder lets you import your old resume and make changes as needed, so you can easily create a new, updated version that showcases your latest achievements and qualifications.',
      function: onRevampClick,
    },
  ];

  return (
    <>
      <motion.h2
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, x: '100%' }}
        className="py-9 text-[32px] font-bold text-[var(--text)] w-[480px]"
      >
        How would you like to create your resume?
      </motion.h2>

      <motion.ul
        initial={{ opacity: 0, y: '-50%' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, y: '100%' }}
        className="min-w-[650px]"
      >
        {lists.map((list) => (
          <li key={list.title} className="mb-[18px]">
            <button
              className="bg-white w-full text-left p-[18px] rounded-[4px] shadow-[0_2px_4px_rgb(0,0,0,0.1)] hover:scale-[1.03] transition-transform"
              onClick={list.function}
            >
              <div className="flex items-center">
                <h3 className="text-[18px] font-bold text-[var(--text)]">
                  {list.title}
                </h3>
                <span className="ml-2 text-[#c5c5c5] text-[12px]">
                  {list.rec}
                </span>
              </div>

              <p className="text-[14px] text-[#929292] mt-[14px]">
                {list.text}
              </p>
            </button>
          </li>
        ))}
      </motion.ul>

      <Button
        text="Back"
        className="text-[16px] py-[8px] px-[18px] font-medium my-[18px]"
        onClick={() => {
          props.setModelNumber(0);
        }}
      />
    </>
  );
};

export default DocumentType;
