import { HomeButton } from '../UI/Button';

import { ReactComponent as Logo } from '../../assests/svg/logo.svg';

import './NavBar.css';

const NavBar = () => {
  const nav = [
    { text: 'Home', link: '/' },
    { text: 'Why us', link: '/whyus' },
    { text: 'Price', link: '/price' },
  ];

  return (
    <section className="flex justify-between pt-[60px]">
      <div>
        <Logo fill="#fff" />
      </div>

      <div className="flex items-center">
        <nav className="mr-36">
          <ul className="flex">
            {nav.map((item) => (
              <li
                className="text-[var(--white)] [&:not(:last-child)]:mr-[40px] [&:not(:first-child)]:text-[var(--home-dark)] relative nav transition-[transform, color]"
                key={item.text}
              >
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>

        <HomeButton
          className="py-[9px] border-[var(--home-dark)] mr-7 hover:bg-[var(--home-dark)] transition-colors"
          text="Sign Up"
        />

        <HomeButton
          className="bg-[var(--home-dark)] py-[9px] border-[var(--home-dark)] hover:bg-transparent transition-colors"
          text="Log In"
        />
      </div>
    </section>
  );
};

export default NavBar;
