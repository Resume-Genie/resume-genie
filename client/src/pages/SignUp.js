import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { registerValidation } from '../helper/validate';
import { registerUser } from '../helper/helper';

import Input from '../component/UI/Input';
import Button from '../component/UI/Button';
import { useAuthStore, useAuthUsername } from '../store/Store';

import { ReactComponent as Logo } from './../assets/svg/logo.svg';
import signupSvg from './../assets/svg/auth/signup-svg.svg';

import './bg.css';

const SignUp = () => {
  useEffect(() => {
    document.title = 'Resume Genie | Register';
  }, []);

  const setEmail = useAuthStore((state) => state.setEmail);
  const setUsername = useAuthUsername((state) => state.setUsername);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: 'example@123.com',
      username: 'example',
      password: 'hello@123',
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let registerPromise = registerUser(values);
      toast.promise(registerPromise, {
        loading: 'Creating...',
        success: <b>Register Successfully...!</b>,
        error: <b>Could not Register.</b>,
      });

      registerPromise.then(() => {
        setEmail(values.email);
        setUsername(values.username);
        navigate('/login');
      });
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.75, ease: [0, 0.99, 1, 0.94] }}
      exit={{ opacity: 0, x: '100%' }}
      className="w-full min-h-[100vh] flex bg-cover bg-no-repeat bg"
    >
      <Toaster position="top-center" reverseOrder={false}></Toaster>

      <div className="w-2/5 p-[40px]">
        <div className="mb-5">
          <Logo fill="var(--dark)" title="Resume Genie Logo" />
        </div>

        <section className="p-10 text-center">
          <div className="mb-9">
            <h2 className="text-[28px] font-bold text-[var(--text)] tracking-wider">
              Create an account
            </h2>
            <p className="text-[16px] text-[var(--text-light)]">
              And enjoy life during the time you saved!
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <Input
              type="text"
              label="Name"
              htmlFor="signup-name"
              placeholder="Your Name"
              formik={formik.getFieldProps('username')}
              className="invisible absolute"
            />
            <Input
              type="email"
              label="Email"
              htmlFor="signup-mail"
              placeholder="Your Email"
              formik={formik.getFieldProps('email')}
              className="invisible absolute"
            />
            <Input
              type="password"
              label="Password"
              htmlFor="signup-password"
              placeholder="Your Password"
              formik={formik.getFieldProps('password')}
              className="invisible absolute"
            />

            <Button
              type="submit"
              text="CREATE AN ACCOUNT"
              className="text-[12px] bg-[var(--primary)] p-[18px] w-full max-w-[300px] my-[18px] font-bold"
            />
          </form>

          <div className="text-[18px] flex justify-center mt-9">
            <p className="text-[var(--text) mr-2">Already have an Account?</p>
            <a href="/login" className="text-[var(--primary)]">
              Login
            </a>
          </div>
        </section>
      </div>

      <div className="w-3/5 flex justify-center items-center">
        <img
          src={signupSvg}
          alt="Sign Up SVG"
          className="max-w-[calc(14vw+500px)]"
        />
      </div>
    </motion.section>
  );
};

export default SignUp;
