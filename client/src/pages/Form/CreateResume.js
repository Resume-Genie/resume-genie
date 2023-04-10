import { useEffect } from 'react';
import { motion } from 'framer-motion';

import SidebarClose from '../../component/Sidebar/SidebarClose';
import Editor from '../../component/Form/Editor';
import LiveResume from '../../component/Form/LiveResume';

const CreateResume = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Create Resume';
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="flex"
    >
      <SidebarClose />

      <section className="p-9 w-full flex">
        <Editor />
        {/* <LiveResume /> */}
      </section>
    </motion.section>
  );
};

export default CreateResume;
