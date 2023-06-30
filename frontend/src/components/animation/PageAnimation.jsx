import { motion } from 'framer-motion';

const PageAnimation = (props) => {
  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '-100%' }}
      className=""
    >
      {props.children}
    </motion.section>
  );
};
export default PageAnimation;
