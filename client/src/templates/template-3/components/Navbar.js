import { ReactComponent as Rectangle } from "../../image/icon/Rectangle.svg";

import email from "../../image/icon/email.svg";
import phone from "../../image/icon/phone.svg";
import location from "../../image/icon/location.svg";
import calendar from "../../image/icon/calendar.svg";
import ProfilePhoto from "../../image/ProfilePhoto.jpg";

export default function Navbar({ data }) {
  const me = [
    {
      id: 1,
      text: data.email,
      img: email,
    },
    {
      id: 2,
      text: data.phone_no,
      img: phone,
    },
    {
      id: 3,
      text: data.location,
      img: location,
    },
    {
      id: 4,
      text: data.dob,
      img: calendar,
    },
  ];

  return (
    <>
      <div className="flex justify-between mx-8 mt-6">
        <div className="flex">
          <div className="-ml-9 mt-7">
            <Rectangle fill="#313c4e" />
          </div>
          <div className="ml-2">
            <p className="text-[2vw]  text-[#313c4e] ">{data.name}</p>
            <p className="text-[1vw] font-bold text-[#449297] mt-2">
              {data.role}
            </p>
            <p className="mt-4 text-[0.8vw] font-bold">{data.description}</p>
          </div>
        </div>
        <div className="w-[20vh] h-[18vh] rounded-full overflow-hidden border-[#449297] border-[0.6vh] border-solid flex items-center justify-center mt-[3vh]">
          <img
            src={ProfilePhoto}
            alt="profile"
            className="object-cover max-w-[100%] w-[100%]"
          />
        </div>
        <div className="mr-[-4vh]">
          {me.map((element, index) => (
            <div key={index} className="flex justify-end mb-4">
              <p className="text-[calc(1.6vh)] font-bold mr-5">
                {element.text}
              </p>
              <img src={element.img} alt=""></img>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-[0.4vh] w-[100%] bg-[#000000] mt-3" />
    </>
  );
}
