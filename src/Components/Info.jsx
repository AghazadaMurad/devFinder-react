import React from "react";

const Info = (props) => {
  return (
    <div>
      <div className="text-sm text-white">{props.name}</div>
      <div id="repo" className="text-2xl font-bold text-white">
        {props.num}
      </div>
    </div>
  );
};

export default Info;
