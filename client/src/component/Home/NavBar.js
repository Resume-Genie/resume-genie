import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { HomeButton } from '../UI/Button';

import { ReactComponent as Logo } from '../../assets/svg/logo.svg';

import './NavBar.css';

const NavBar = () => {
  const navigate = useNavigate();
  const nav = [
    { text: 'Home', link: 'home' },
    { text: 'How?', link: 'howto' },
    { text: 'Why us?', link: 'whyus' },
  ];

  return (
    <section className="flex justify-between mb-20 max-w-[1376px] mx-auto">
      <div>
        <Logo fill="#fff" title="Resume Genie Logo" />
      </div>

      <div className="flex items-center">
        <nav className="mr-36">
          <ul className="flex nav">
            {nav.map((item) => (
              <li
                className="text-white transition-[transform,color] [&:not(:last-child)]:mr-10 [&:not(:first-child)]:text-[var(--home-dark)] relative nav-item cursor-pointer"
                key={item.text}
                role="link"
                tabIndex="0"
                onClick={() =>
                  document.getElementById(item.link).scrollIntoView()
                }
              >
                {item.text}
              </li>
            ))}
          </ul>
        </nav>

        <HomeButton
          className="py-[9px] border-[var(--home-dark)] mr-7 hover:bg-[var(--home-dark)]"
          text="Sign Up"
          onClick={() => navigate('/register')}
        />

        <HomeButton
          className="bg-[var(--home-dark)] py-[9px] border-[var(--home-dark)] hover:bg-transparent"
          text="Log In"
          onClick={() => navigate('/login')}
        />
      </div>
    </section>
  );
};

export default NavBar;
