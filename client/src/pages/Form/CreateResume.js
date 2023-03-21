import { motion } from 'framer-motion';

const CreateResume = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="flex"
    >
      Create Resume
    </motion.section>
  );
};

export default CreateResume;
