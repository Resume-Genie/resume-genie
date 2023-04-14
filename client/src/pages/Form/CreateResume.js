import { useEffect } from 'react';
import { motion } from 'framer-motion';

import SidebarClose from '../../component/Sidebar/SidebarClose';
import FormBody from '../../component/Form/FormBody';

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
      className="flex h-[100vh]"
    >
      <SidebarClose />
      <FormBody />
    </motion.section>
  );
};

export default CreateResume;
