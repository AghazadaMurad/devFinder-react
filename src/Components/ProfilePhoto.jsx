import React from "react";

const ProfilePhoto = (props) => {
  return (
    <div className="w-28 h-28 rounded-full object-contain">
      <img
        id="img"
        className="w-full h-full rounded-full object-contain"
        src={props.src}
        alt=""
      />
    </div>
  );
};

export default ProfilePhoto;
