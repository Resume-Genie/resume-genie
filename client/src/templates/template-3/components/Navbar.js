import { ReactComponent as Rectangle } from '../../image/icon/Rectangle.svg';

import email from '../../image/icon/email.svg';
import phone from '../../image/icon/phone.svg';
import location from '../../image/icon/location.svg';
import calendar from '../../image/icon/calendar.svg';
import ProfilePhoto from '../../image/ProfilePhoto.jpg';

export default function Navbar({ data }) {
  const me = [
    {
      id:1,
      text: data.email,
      img: email,
    },
    {
      id:2,
      text: data.phone_no,
      img: phone,
    },
    {
      id:3,
      text: data.location,
      img: location,
    },
    {
      id:4,
      text: data.dob,
      img: calendar,
    },
  ];

  return (
    <>
      <div className="flex justify-between mx-8 mt-10">
        <div className="flex">
          <div className="-ml-9 mt-7">
            <Rectangle fill="#313c4e" />
          </div>
          <div className="ml-8">
            <p className="text-[48px] text-[#313c4e]">{data.name}</p>
            <p className="text-[28px] text-[#449297] mt-2">{data.role}</p>
            <p className="mt-4">{data.description}</p>
          </div>
        </div>
        <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-[#449297] border-8 border-solid flex items-center justify-center">
          <img
            src={ProfilePhoto}
            alt="profile"
            className="object-cover max-w-[100%] w-[100%]"
          />
        </div>
        <div className="mr-4">
          {me.map((element) => (
            <div key={element.id}className="flex justify-end mb-6">
              <p className="text-[20px] mr-5">{element.text}</p>
              <img src={element.img} alt=""></img>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-[4px] bg-[#000000] mt-3" />
    </>
  );
}
