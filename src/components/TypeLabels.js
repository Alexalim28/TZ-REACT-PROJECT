import React from "react";

const TypeLabels = ({ handleChange, boxName }) => (
  <div className="clock-labels">
    <label>
      Digital
      <input
        type="checkbox"
        name="digital"
        checked={boxName === "digital" && true}
        onChange={handleChange}
      />
    </label>
    <label>
      Analog
      <input
        type="checkbox"
        name="analog"
        checked={boxName === "analog" && true}
        onChange={handleChange}
      />
    </label>
  </div>
);

export default TypeLabels;
