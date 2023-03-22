import { motion } from 'framer-motion';

import DashboardLink from '../../component/DashboardLink';

import logoShort from './../../assests/svg/logo-short.svg';
import dashboard from './../../assests/svg/dashboard/dashboard-svg.svg';
import library from './../../assests/svg/dashboard/library-svg.svg';
import profile from './../../assests/svg/dashboard/profile-svg.svg';
import logOut from './../../assests/svg/dashboard/log-out-svg.svg';

const CreateResume = () => {
  const boardLinks = [
    {
      logo: dashboard,
      text: 'My Dashboard',
      link: '/dashboard/all',
    },
    {
      logo: library,
      text: 'Sample Library',
      link: '/library',
    },
    {
      logo: profile,
      text: 'My Profile',
      link: '/profile',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="flex"
    >
      <section className="h-[100vh] bg-[#f1fffe] flex flex-col items-center py-[40px] px-3">
        <div>
          <img src={logoShort} alt="Resume Genie Logo" />
        </div>

        <ul className="mt-[15vh]">
          {boardLinks.map((boardLink) => (
            <li
              className="[&:not(:first-child)]:mt-[48px] relative after:content-[attr(data-text)] tooltip tooltip-right"
              data-text={boardLink.text}
              key={boardLink.text}
            >
              <DashboardLink logo={boardLink.logo} link={boardLink.link} />
            </li>
          ))}
        </ul>

        <button
          className="mt-auto w-[24px] h-[24px] relative after:content-[attr(data-text)] tooltip tooltip-right"
          data-text="LogOut"
        >
          <img src={logOut} alt="Dashboard Logo" />
        </button>
      </section>
    </motion.section>
  );
};

export default CreateResume;
