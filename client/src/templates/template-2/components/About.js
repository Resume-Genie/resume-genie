import React from "react";
import ProfilePhoto from "../../image/ProfilePhoto.jpg";

import email from "../../image/icon/email.svg";
import phone from "../../image/icon/phone.svg";
import location from "../../image/icon/location.svg";
import calendar from "../../image/icon/calendar.svg";

const About = ({ data }) => {
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
    <div>
      <div className="w-[18vh] h-[16vh] rounded-full overflow-hidden border-[#66cc99] border-[0.6vh] border-solid flex items-center justify-center mt-[3vh]">
        <img
          src={ProfilePhoto}
          alt="profile"
          className="object-cover max-w-[100%] w-[100%]"
        />
      </div>
      <h1 className="text-[2.2vw]  text-[#4a4e51] ">{data.name}</h1>

      <div className="mt-[1vw]">
        {me.map((element, index) => (
          <div key={index} className="flex  mb-4">
            <img src={element.img} alt=""></img>
            <p className="text-[calc(0.9vw)] ml-[1vw]">{element.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
