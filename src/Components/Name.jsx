import React from "react";

const Name = (props) => {
  return (
    <div id="user" className="text-2xl font-bold text-white">
      {props.children ? props.children : "No Name"}
    </div>
  );
};

export default Name;
