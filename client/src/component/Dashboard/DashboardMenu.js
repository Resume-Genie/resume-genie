import Button from '../../component/UI/Button';
import { useAuthUsername } from '../../store/Store';

import dp from '../../assets/svg/dashboard/dp-svg.svg';

const DashboardMenu = () => {
  const username = useAuthUsername((state) => state.auth.username);

  const buttons = ['All', 'Resumes', 'Cover Letters', 'Resignation Letters'];

  return (
    <section className="flex justify-between">
      <ul className="flex">
        {buttons.map((button) => (
          <li className="[&:not(:first-child)]:ml-[16px]" key={button}>
            <Button
              text={button}
              className="text-[16px] py-2 px-[18px] font-medium"
            />
          </li>
        ))}
      </ul>

      <a href="/dashboard/profile" className="flex items-center">
        <div className="rounded-full border-2 border-black border-solid w-10 h-10 flex justify-center overflow-hidden p-1">
          <img src={dp} alt="Profile" />
        </div>
        <p className="ml-[16px] text-[16px]">{username}</p>
      </a>
    </section>
  );
};

export default DashboardMenu;
