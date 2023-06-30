import { Link } from 'react-router-dom';
import PageAnimation from '../../components/animation/PageAnimation';

const ResetPassword = () => {
  return (
    <PageAnimation>
      <div className="bg-red-200 w-screen h-screen">
        <Link to="/forgotPassword">Reset Password</Link>
      </div>
    </PageAnimation>
  );
};
export default ResetPassword;
