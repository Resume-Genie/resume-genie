import { ReactComponent as Logo } from '../../assets/svg/logo.svg';
import { ReactComponent as Github } from '../../assets/svg/home/Footer/github.svg';
import { ReactComponent as Arrow } from '../../assets/svg/home/Footer/arrow.svg';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="overflow-hidden pt-32">
      <div className="footer z-20 grid relative">
        <div className="bubbles absolute top-0 left-0 right-0 h-4">
          {[...Array(100)].map((e, i) => (
            <div
              key={i}
              className="bubble"
              style={{
                '--size': 2 + Math.random() * 4 + 'rem',
                '--distance': 7 + Math.random() * 4 + 'rem',
                '--position': -5 + Math.random() * 110 + '%',
                '--time': 2 + Math.random() * 2 + 's',
                '--delay': -1 * (2 + Math.random() * 2) + 's',
              }}
            ></div>
          ))}
        </div>

        <div className="content z-30">
          <div className="flex justify-between py-3 px-2">
            <p className="text-white text-xl p-2 text-center font-light">
              © 2023 Copyright | Resume Genie
            </p>

            <div className="flex items-center ">
              <a href="https://github.com/Gautam25Raj/resume-genie">
                <Github fill="#fff" className="mr-2 w-10 h-10" />
              </a>

              <button
                onClick={() => document.getElementById('home').scrollIntoView()}
              >
                <Arrow className="w-10 h-10" fill="#fff" />
              </button>
            </div>
          </div>
        </div>

        <svg className="top-[100vh] fixed">
          <defs>
            <filter id="blob">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              ></feGaussianBlur>
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="blob"
              ></feColorMatrix>
            </filter>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
