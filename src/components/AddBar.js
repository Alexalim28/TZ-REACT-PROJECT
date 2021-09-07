import React from "react";
import { TiPlus } from "react-icons/ti";

const AddBar = ({ addTimeZone }) => (
  <div className="add-bar" onClick={() => addTimeZone(Math.random() * 1000)}>
    <span>Add a new time zone</span>
    <TiPlus className="icon" />
  </div>
);

export default AddBar;
