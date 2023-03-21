import React from "react";
import email from "../../image/icon/email.svg";
import phone from "../../image/icon/phone.svg";
import location from "../../image/icon/location.svg";
import calendar from "../../image/icon/calendar.svg";
import ProfilePhoto from "../../image/icon/ProfilePhoto.jpg";

export default function Navbar({ data }) {
  const me = [
    {
      text: data.email,
      img: email,
    },
    {
      text: data.phone_no,
      img: phone,
    },
    {
      text: data.location,
      img: location,
    },
    {
      text: data.dob,
      img: calendar,
    },
  ];

  return (
    <div>
      <div className="flex justify-between mx-8 mt-10">
        <div className="ml-4">
          <p className="text-[48px] text-[hsl(217,23%,25%)]">{data.name}</p>
          <p className="text-[28px] text-[#449297] mt-2">{data.role}</p>
          <p className="mt-4">{data.description}</p>
        </div>
        <div className="w-[250px] h-[250px] rounded-full overflow-hidden border-[#449297] border-8 border-solid flex items-center justify-center">
          <img
            src={ProfilePhoto}
            alt="profile photo"
            className="object-cover max-w-[100%] w-[100%]"
          />
        </div>
        <div className="mr-4">
          {me.map((element) => (
            <div className="flex justify-end mb-6">
              <p className="mr-3 text-[20px] mr-5">{element.text}</p>
              <img src={element.img} alt=""></img>
            </div>
          ))}
        </div>
      </div>
      <hr className="h-[4px] bg-[#000000] mt-3" />
    </div>
  );
}
