import { AnimatePresence } from 'framer-motion';
import { Routes as ReactRoutes, Route, useLocation } from 'react-router-dom';

import Home from '../pages/Home';

import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/Register';
import Recovery from '../pages/auth/Recovery';
import Reset from '../pages/auth/ResetPassword';
import ForgotPassword from '../pages/auth/ForgotPassword';

import DashboardRoutes from './DashboardRoutes';
import FormRoutes from './FormRoutes';

import PageNotFound from '../pages/error/PageNotFound';

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ReactRoutes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<Reset />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/dashboard/*" element={<DashboardRoutes />} />
        <Route path="/create/*" element={<FormRoutes />} />
        <Route path="/*" element={<PageNotFound />} />
      </ReactRoutes>
    </AnimatePresence>
  );
};

export default Routes;
