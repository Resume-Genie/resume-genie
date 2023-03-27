import { useNavigate } from 'react-router-dom';

import DashboardLink from '../DashboardLink';

import logoShort from './../../assests/svg/logo-short.svg';
import dashboard from './../../assests/svg/dashboard/dashboard-svg.svg';
import library from './../../assests/svg/dashboard/library-svg.svg';
import profile from './../../assests/svg/dashboard/profile-svg.svg';
import logOut from './../../assests/svg/dashboard/log-out-svg.svg';

import './SidebarClose.css';

const SidebarClose = () => {
  const navigate = useNavigate();

  const boardLinks = [
    {
      logo: dashboard,
      text: 'MY DASHBOARD',
      link: '/dashboard/all',
    },
    {
      logo: library,
      text: 'SAMPLE LIBRARY',
      link: '/library',
    },
    {
      logo: profile,
      text: 'MY PROFILE',
      link: '/profile',
    },
  ];

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <section className="h-[100vh] bg-[#f1fffe] flex flex-col items-center py-[40px] px-3">
      <div>
        <a href="/dashboard/all">
          <img src={logoShort} alt="Resume Genie Logo" />
        </a>
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
        <img src={logOut} alt="Dashboard Logo" onClick={logoutHandler} />
      </button>
    </section>
  );
};

export default SidebarClose;
