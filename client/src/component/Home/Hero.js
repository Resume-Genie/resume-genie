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
        <h1 className="text-[52px] text-white font-bold tracking-[0.08em] mb-9 heading prevent-select">
          Unleash your potential with a standout{' '}
          <span className="span">resume!</span>
        </h1>

        <p className="text-white text-[18px] tracking-[0.08em] mb-14 max-w-[500px]">
          Say goodbye to boring, outdated resumes and hello to your future dream
          job. Start building your resume today!
        </p>

        <HomeButton
          className="bg-[var(--primary-green)] py-[9px] border-[var(--primary-green)] hover:bg-transparent mr-7"
          text="Create Free Resume"
          onClick={() => navigate('/register')}
        />

        <HomeButton
          className="py-[9px] border-[var(--primary-green)] hover:bg-[var(--primary-green)]"
          text="Know More"
          onClick={() => document.getElementById('howto').scrollIntoView()}
        />
      </section>
    </section>
  );
};

export default Hero;
