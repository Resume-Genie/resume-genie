import React from "react";
import ProfilePhoto from "../../image/ProfilePhoto.jpg";

const Name = (data) => {
  return (
    <div>
      <div>
        <div className="w-[130px] h-[130px] rounded-full overflow-hidden border-[#66cc99] border-8 border-solid flex items-center justify-center">
          <img
            src={ProfilePhoto}
            alt="profile"
            className="object-cover max-w-[100%] w-[100%]"
          />
        </div>
        <h1>{data.name}</h1>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Name;
