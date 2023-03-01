import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PageNotFound from './pages/PageNotFound';
import Profile from './pages/Profile';
import Recovery from './pages/Recovery';
import Reset from './pages/Reset';
import Samples from './pages/Samples';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/recovery',
    element: <Recovery />,
  },
  {
    path: '/reset',
    element: <Reset />,
  },
  {
    path: '/dashboard/all',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/resumes',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/samples',
    element: <Samples />,
  },
  {
    path: '/dashboard/profile',
    element: <Profile />,
  },
  {
    path: '/page-not-found',
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <main className="App">
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
