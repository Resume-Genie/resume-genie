import { motion } from 'framer-motion';
import Hero from '../component/Home/Hero';

import NavBar from '../component/Home/NavBar';

import './bg.css';
import './Home.css';

const Home = () => {
  return (
    <motion.section
      initial={{ x: '-100%' }}
      animate={{ x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="px-20 bg-[var(--home-bg)] home-bg"
    >
      <NavBar />
      <Hero />
    </motion.section>
  );
};

export default Home;
