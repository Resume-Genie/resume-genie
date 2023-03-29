import { useNavigate } from 'react-router-dom';

import DashboardLink from '../../component/DashboardLink';
import Button from '../../component/UI/Button';

import { ReactComponent as Logo } from './../../assests/svg/logo.svg';
import dashboard from './../../assests/svg/dashboard/dashboard-svg.svg';
import library from './../../assests/svg/dashboard/library-svg.svg';
import profile from './../../assests/svg/dashboard/profile-svg.svg';
import logOut from './../../assests/svg/dashboard/log-out-svg.svg';

const SidebarOpen = (props) => {
  const navigate = useNavigate();

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

  const logoutHandler = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <section className="w-[22vw] h-[100vh] bg-[#F1FFFE] flex flex-col items-center p-10">
      <div className="mb-10">
        <Logo fill="var(--dark)" title="Resume Genie Logo" />
      </div>

      <Button
        text="CREATE NEW DOCUMENT"
        className="text-white text-[14px] bg-[var(--dark)] p-[18px] w-full rounded-[5px] max-w-[260px] font-bold"
        onClick={() => {
          props.setIsOpenModel(true);
        }}
      />

      <ul className="self-start mt-[13.4vh]">
        {boardLinks.map((boardLink) => (
          <li className="[&:not(:first-child)]:mt-[36px]" key={boardLink.text}>
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

        <p className="text-[18px] text-[var(--text)] ml-5">Log Out</p>
      </button>
    </section>
  );
};

export default SidebarOpen;
