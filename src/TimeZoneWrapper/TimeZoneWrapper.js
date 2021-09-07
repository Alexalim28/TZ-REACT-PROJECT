import React, { useState, useEffect } from "react";
import TimeZoneThumb from "./TimeZoneThumb";

const TimeZoneWrapper = ({ timezoneThumbs, removeTimeZone }) => {
  const [timezoneList, setTimezoneList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "http://api.timezonedb.com/v2.1/list-time-zone?key=3S8CT06GEKID&format=json"
        );
        const data = await response.json();
        const zones = data.zones.map((zone) => zone.zoneName).sort();
        setTimezoneList(zones);
        setLoading(false);
      } catch (e) {
        console.log("Something's wrong");
      }
    })();
  }, []);

  return (
    <section className="time-zone-wrapper">
      {timezoneThumbs.map((id) => (
        <TimeZoneThumb
          key={id}
          id={id}
          timezoneList={timezoneList}
          removeTimeZone={removeTimeZone}
          loading={loading}
        />
      ))}
    </section>
  );
};

export default TimeZoneWrapper;
