import React from "react";

const DigitalClock = ({ timestamp }) => {
  const date = new Date(timestamp);

  let hour = date.getUTCHours();
  let minutes = date.getUTCMinutes();
  let seconds = date.getUTCSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return (
    <div className="digital-clock">
      {hour}:{minutes}:{seconds}
    </div>
  );
};
export default DigitalClock;
