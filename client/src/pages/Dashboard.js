import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Button from '../component/UI/Button';
import DashboardLink from '../component/DashboardLink';
import Model from '../component/model';
import { useAuthUsername } from '../store/Store';

import logo from './../assests/svg/logo.svg';
import dp from './../assests/svg/dashboard/dp-svg.svg';
import dashboard from './../assests/svg/dashboard/dashboard-svg.svg';
import library from './../assests/svg/dashboard/library-svg.svg';
import profile from './../assests/svg/dashboard/profile-svg.svg';
import logOut from './../assests/svg/dashboard/log-out-svg.svg';
import add from './../assests/svg/dashboard/add-svg.svg';

const Dashboard = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Dashboard';
  }, []);

  const username = useAuthUsername((state) => state.auth.username);
  const [isOpenModel, setIsOpenModel] = useState(false);
  const [modelNumber, setModelNumber] = useState(0);
  const navigate = useNavigate();

  const openModel = () => {
    setIsOpenModel(true);
  };

  const title = [
    'CREATE A RESUME',
    'CREATE A COVER LETTER',
    'CREATE A RESIGNATION LETTER',
  ];

  const boardLinks = [
    {
      logo: dashboard,
      text: 'My Dashboard',
      link: '/dashboard/all',
    },
    {
      logo: library,
      text: 'Sample Library',
      link: '/dashboard/samples',
    },
    {
      logo: profile,
      text: 'My Profile',
      link: '/dashboard/profile',
    },
  ];

  const buttons = ['All', 'Resumes', 'Cover Letters', 'Resignation Letters'];

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <>
      <Model
        open={isOpenModel}
        onClose={() => setIsOpenModel(false)}
        modelNumber={modelNumber}
        title={title[0]}
        setModelNumber={setModelNumber}
      />

      <motion.section
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: '0' }}
        transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
        exit={{ opacity: 0, x: '100%' }}
        className="flex"
      >
        <section className="w-[22vw] h-[100vh] bg-[#F1FFFE] flex flex-col items-center p-[40px]">
          <div>
            <img src={logo} alt="Resume Genie Logo" />
          </div>

          <Button
            text="CREATE NEW DOCUMENT"
            className="text-[var(--white)] text-[14px] bg-[var(--dark)] p-[18px] w-full rounded-[5px] max-w-[260px] mt-[40px] font-bold"
            onClick={openModel}
          />

          <ul className="self-start mt-[13.4vh]">
            {boardLinks.map((boardLink) => (
              <li
                className="[&:not(:first-child)]:mt-[36px]"
                key={boardLink.text}
              >
                <DashboardLink
                  logo={boardLink.logo}
                  text={boardLink.text}
                  link={boardLink.link}
                />
              </li>
            ))}
          </ul>

          <button className="self-start mt-auto flex" onClick={logoutHandler}>
            <div className="w-[24px] h-[24px]">
              <img src={logOut} alt="Dashboard Logo" />
            </div>

            <p className="text-[18px] text-[var(--text)] ml-[20px]">Log Out</p>
          </button>
        </section>

        <section className="w-[78vw] h-[100vh] py-[36px] px-[60px]">
          <section className="flex justify-between">
            <ul className="flex">
              {buttons.map((button) => (
                <li className="[&:not(:first-child)]:ml-[16px]" key={button}>
                  <Button
                    text={button}
                    className="text-[16px] py-[8px] px-[18px] font-medium"
                  />
                </li>
              ))}
            </ul>

            <a href="/profile" className="flex items-center">
              <div className="rounded-full border-2 border-black border-solid w-[40px] h-[40px] flex justify-center overflow-hidden p-1">
                <img src={dp} alt="Profile" />
              </div>
              <p className="ml-[16px] text-[16px]">{username}</p>
            </a>
          </section>

          <section className="px-[40px] py-[50px]">
            <button
              className="rounded-[10px] border-dashed border-2 w-[250px] h-[300px] border-[var(--dark)]"
              onClick={openModel}
            >
              <div className="flex flex-col items-center mt-[-16px]">
                <img src={add} alt="" className="w-[60px] h-[60px]" />
                <p className="text-[14px] font-bold mt-4 text-[var(--text)]">
                  CREATE NEW DOCUMENT
                </p>
              </div>
            </button>
          </section>
        </section>
      </motion.section>
    </>
  );
};

export default Dashboard;
