import { useEffect } from 'react';

import Input from '../component/Input';
import Button from '../component/Button';

import logo from './../assests/svg/logo.svg';
import forgotPassword from './../assests/svg/forgot-password-svg.svg';

import './bg.css';

const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Forgot Password';
  }, []);

  return (
    <section className="w-[100%] min-h-[100vh] flex bg-cover bg-no-repeat bg">
      <div className="w-2/5 p-[40px]">
        <div>
          <img src={logo} alt="Resume Genie Logo" />
        </div>

        <section className="mt-[20px] p-[40px] text-center">
          <div className="mb-[36px]">
            <h2 className="text-[28px] font-bold text-[var(--text)] tracking-wider">
              Forgot Password
            </h2>
            <p className="text-[16px] text-[var(--text-light)] max-w-[320px] mx-auto">
              Enter the email associated with your account and we’ll send a
              6-digit OTP to reset your password
            </p>
          </div>

          <form action="">
            <Input
              type="email"
              label="Email"
              for="signup-mail"
              placeholder="Your Email"
            />

            <Button
              type="submit"
              text="SEND OTP"
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
          src={forgotPassword}
          alt="Forgot Password SVG"
          className="max-w-[calc(14vw+500px)]"
        />
      </div>
    </section>
  );
};

export default ForgotPassword;
