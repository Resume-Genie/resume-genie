import { Routes as ReactRoutes, Route, useLocation } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Profile from '../pages/Dashboard/Profile';
import Samples from '../pages/Dashboard/Samples';
import PageNotFound from '../pages/error/PageNotFound';

const Routes = () => {
  const location = useLocation();

  return (
    <ReactRoutes location={location} key={location.pathname}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/samples" element={<Samples />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/*" element={<PageNotFound />} />
    </ReactRoutes>
  );
};

export default Routes;
