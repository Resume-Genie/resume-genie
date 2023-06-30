import { Link } from 'react-router-dom';
import PageAnimation from '../../components/animation/PageAnimation';

const ForgotPassword = () => {
  return (
    <PageAnimation>
      <div className="bg-pink-600 h-screen w-screen">
        <Link to="/resetPassword">ResetPassword</Link>
      </div>
    </PageAnimation>
  );
};
export default ForgotPassword;
