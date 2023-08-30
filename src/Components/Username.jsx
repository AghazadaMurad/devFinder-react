import React from "react";

const Username = (props) => {
  return (
    <a id="username" className="text-base" target="blank" href="">
      {props.children}
    </a>
  );
};

export default Username;
