import { useEffect } from 'react';
import { motion } from 'framer-motion';

import Input from '../component/Input';
import Button from '../component/Button';

import logo from './../assests/svg/logo.svg';
import resetPasswordSvg from './../assests/svg/reset-password-svg.svg';

import './bg.css';

const Reset = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Reset Password';
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="w-[100%] min-h-[100vh] flex bg-cover bg-no-repeat bg"
    >
      <div className="w-2/5 p-[40px]">
        <div>
          <img src={logo} alt="Resume Genie Logo" />
        </div>

        <section className="mt-[20px] p-[40px] text-center">
          <div className="mb-[36px]">
            <h2 className="text-[28px] font-bold text-[var(--text)] tracking-wider">
              Reset Password
            </h2>
            <p className="text-[16px] text-[var(--text-light)] max-w-[320px] mx-auto">
              Your New Password must be different from previous used password.
            </p>
          </div>

          <form action="">
            <Input
              type="password"
              label="password"
              labelFor="reset-password"
              placeholder="Enter New Password"
            />

            <div className="text-left max-w-[300px] mx-auto text-[14px] text-[var(--text-light)] mt-[-9px] mb-[18px] pl-[4px]">
              Must be at least 8 character.
            </div>

            <Input
              type="password"
              label="Password"
              labelFor="reset-password-confirm"
              placeholder="Confirm New Password"
            />

            <div className="text-left max-w-[300px] mx-auto text-[14px] text-[var(--text-light)] mt-[-9px] mb-[18px] pl-[4px]">
              Both password must match.
            </div>

            <Button
              type="submit"
              text="RESET PASSWORD"
              className="text-[var(--white)] text-[12px] bg-[var(--primary)] p-[18px] w-full rounded-[5px] max-w-[300px] my-[18px] font-bold"
            />
          </form>

          <div className="text-[18px] flex justify-center mt-[36px]">
            <p className="text-[var(--text) mr-2">Remember Password?</p>
            <a href="/login" className="text-[var(--primary)]">
              Login Page
            </a>
          </div>
        </section>
      </div>

      <div className="w-3/5 flex justify-center items-center">
        <img
          src={resetPasswordSvg}
          alt="Reset Password SVG"
          className="max-w-[calc(14vw+500px)]"
        />
      </div>
    </motion.section>
  );
};

export default Reset;
