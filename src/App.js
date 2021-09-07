import React, { useState } from "react";
//Components
import Title from "./components/Title";
import AddBar from "./components/AddBar";
import TimeZoneWrapper from "./TimeZoneWrapper/TimeZoneWrapper";

//Styles
import "./App.css";

const App = () => {
  const [timezoneThumbs, setTimezoneThumbs] = useState([1]);

  const addTimeZone = (thumbId) => {
    setTimezoneThumbs([...timezoneThumbs, thumbId]);
  };

  const removeTimeZone = (id) => {
    const newTimeZoneThumbs = timezoneThumbs.filter(
      (thumbId) => thumbId !== id
    );
    setTimezoneThumbs(newTimeZoneThumbs);
  };

  return (
    <>
      <Title />
      <AddBar addTimeZone={addTimeZone} />
      <TimeZoneWrapper
        timezoneThumbs={timezoneThumbs}
        removeTimeZone={removeTimeZone}
      />
    </>
  );
};

export default App;
