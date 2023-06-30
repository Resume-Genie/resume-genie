import { Routes as ReactRoutes, Route, useLocation } from 'react-router-dom';

import CoverLetter from '../pages/createForm/Resume';
import Resume from '../pages/createForm/Resume';
import Resignation from '../pages/createForm/Resume';

import PageNotFound from '../pages/error/PageNotFound';

const Routes = () => {
  const location = useLocation();

  return (
      <ReactRoutes location={location} key={location.pathname}>
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resignation-letter" element={<Resignation />} />
        <Route path="/*" element={<PageNotFound />} />
      </ReactRoutes>
  );
};

export default Routes;
