import React, { useState, useEffect } from "react";
import AnalogClock from "./AnalogClock";
import DigitalClock from "./DigitalClock";

const Clock = ({ timestamp, clockType }) => {
  const [data, setData] = useState([]);
  const [timestampState, setTimestampState] = useState(timestamp);

  const time = (timestamp) => {
    const currTime = new Date(timestamp);
    const seconds = currTime.getUTCSeconds();
    const minutes = currTime.getUTCMinutes();
    const hour = currTime.getUTCHours() + minutes / 60;

    return [
      { unit: "seconds", numeric: seconds },
      {
        unit: "minutes",
        numeric: minutes,
      },
      {
        unit: "hour",
        numeric: hour,
      },
    ];
  };

  useEffect(() => {
    setTimestampState(timestamp);
    return () => {};
  }, [timestamp]);

  useEffect(() => {
    const timer = setInterval(() => {
      const newData = time(timestampState);
      setData(newData);
      setTimestampState((prev) => prev + 1000);
    }, 1000);
    return () => clearInterval(timer);
  }, [timestampState]);

  return (
    <div className="clock">
      {clockType === "analog" ? (
        <AnalogClock data={data} />
      ) : (
        <DigitalClock timestamp={timestampState} />
      )}
      {}
    </div>
  );
};

export default Clock;
