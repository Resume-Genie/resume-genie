import { useEffect } from 'react';
import { motion } from 'framer-motion';

import SidebarClose from '../../component/Sidebar/SidebarClose';

const CreateResume = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Create Resume';
  }, []);

  const buttons = [
    'CONTACT',
    'EXPERIENCE',
    'PROJECTS',
    'EDUCATION',
    'SKILLS',
    'CERTIFICATIONS',
    'OTHERS',
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="flex"
    >
      <SidebarClose />
      <section className="p-4">
        <ul className="flex">
          {buttons.map((button) => (
            <li
              className="[&:not(:first-child)]:ml-[16px] text-white bg-[var(--dark)] rounded-[4px] font-bold"
              key={button}
            >
              <button className="text-[12px] py-[4px] px-[8px] font-bolds tracking-wider">
                {button}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </motion.section>
  );
};

export default CreateResume;
