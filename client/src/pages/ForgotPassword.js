import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';

import Input from '../component/Input';
import Button from '../component/Button';
import { profileValidation } from '../helper/validate';
import { generateOTP } from './../helper/helper';
import { useAuthStore, useAuthUsername } from '../store/Store';

import logo from './../assests/svg/logo.svg';
import forgotPassword from './../assests/svg/forgot-password-svg.svg';

import './bg.css';

const ForgotPassword = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Forgot Password';
  }, []);

  const setEmail = useAuthStore((state) => state.setEmail);
  const setUsername = useAuthUsername((state) => state.setUsername);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate: profileValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let forgotPasswordPromise = generateOTP(values.email);

      toast.promise(forgotPasswordPromise, {
        loading: 'Checking...',
        success: <b>OTP sent to Email...!</b>,
        error: <b>Problem while generating OTP!</b>,
      });

      forgotPasswordPromise.then((res) => {
        setEmail(values.email);
        setUsername(res.username);
        navigate('/recovery');
      });
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="w-[100%] min-h-[100vh] flex bg-cover bg-no-repeat bg"
    >
      <Toaster position="top-center" reverseOrder={false}></Toaster>

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

          <form onSubmit={formik.handleSubmit}>
            <Input
              type="email"
              label="Email"
              labelFor="forgot-mail"
              placeholder="Your Email"
              formik={formik.getFieldProps('email')}
            />

            <Button
              type="submit"
              text="SEND OTP"
              className="text-[12px] bg-[var(--primary)] p-[18px] w-full max-w-[300px] my-[18px] font-bold"
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
    </motion.section>
  );
};

export default ForgotPassword;
