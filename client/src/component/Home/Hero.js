import { useNavigate } from 'react-router-dom';

import { HomeButton } from '../UI/Button';

import hero from '../../assests/images/heroImage.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="flex justify-between items-center max-w-[1376px] mx-auto">
      <div>
        <img src={hero} alt="Smiling girl with resume template" />
      </div>

      <section className="max-w-[620px]">
        <h1 className="text-[52px] text-white font-bold tracking-[0.08em] mb-9 heading">
          Unleash your potential with a standout{' '}
          <span className="span">resume!</span>
        </h1>

        <p className="text-[18px] text-white tracking-[0.08em] mb-14 max-w-[500px]">
          Say goodbye to boring, outdated resumes and hello to your future dream
          job. Start building your resume today!
        </p>

        <HomeButton
          className="bg-[var(--primary-green)] py-[9px] border-[var(--primary-green)] hover:bg-transparent transition-colors mr-[28px]"
          text="Create Free Resume"
          onClick={() => navigate('/register')}
        />

        <HomeButton
          className="py-[9px] border-[var(--primary-green)] mr-7 hover:bg-[var(--primary-green)] transition-colors"
          text="Know More"
          onClick={() => navigate('#whyus')}
        />
      </section>
    </section>
  );
};

export default Hero;
