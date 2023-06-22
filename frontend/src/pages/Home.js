import { motion } from 'framer-motion';

import Hero from '../component/Home/Hero';
import NavBar from '../component/Home/NavBar';
import Steps from '../component/Home/Steps';
import Whyus from '../component/Home/Whyus';

import './bg.css';
import './Home.css';
import Footer from '../component/Home/Footer';

const Home = () => {
  return (
    <motion.section
      initial={{ x: '-100%' }}
      animate={{ x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="bg-[var(--home-bg)] home-scroll"
    >
      <header className="py-[60px] home-bg" id="home">
        <NavBar />
        <Hero />
      </header>

      <Steps />
      <Whyus />
      <Footer />
    </motion.section>
  );
};

export default Home;
