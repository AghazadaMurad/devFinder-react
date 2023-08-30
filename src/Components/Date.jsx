import React from "react";

const Date = (props) => {
  return (
    <div id="date" className="absolute top-2 right-0 text-base text-white">
      {`Joined at ${props.date.slice(0, 10)}`}
    </div>
  );
};

export default Date;
