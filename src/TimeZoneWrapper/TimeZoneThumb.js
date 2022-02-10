import React, { useState, useEffect } from "react";
//Components
import Clock from "../components/Clock";
import Spinner from "../components/Spiner";
import TypeLabels from "../components/TypeLabels";
import DeleteButton from "../components/DeleteButton";

//`https://timezoneapi.io/api/timezone/?${location}&token=${process.env.TOKEN}`

const TimeZoneThumb = ({ id, removeTimeZone, timezoneList, loading }) => {
  const [location, setLocation] = useState("Europe/Paris");
  const [timestamp, setTimestamp] = useState(new Date().getTime());
  const [clockType, setClockType] = useState("analog");

  const handleChange = (e) => {
    const type = e.target.name;
    setClockType(type);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `http://api.timezonedb.com/v2.1/get-time-zone?key=${process.env.KEY}&format=json&by=zone&zone=${location}`
        );
        const data = await response.json();
        const timestamp = data.timestamp;
        setTimestamp(timestamp * 1000);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [location]);

  return (
    <div className="time-zone-thumb">
      <Clock timestamp={timestamp} clockType={clockType} />
      <p>Choose a Time Zone</p>
      {loading ? (
        <Spinner />
      ) : (
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          {timezoneList.map((timezone) => (
            <option key={timezone} value={timezone}>
              {timezone}
            </option>
          ))}
        </select>
      )}
      <TypeLabels handleChange={handleChange} boxName={clockType} />
      <DeleteButton removeTimeZone={removeTimeZone} id={id} />
    </div>
  );
};

export default TimeZoneThumb;
