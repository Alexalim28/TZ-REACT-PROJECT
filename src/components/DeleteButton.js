import React from "react";
import { MdDeleteForever } from "react-icons/md";

const DeleteButton = ({ removeTimeZone, id }) => (
  <div className="delete-btn" onClick={() => removeTimeZone(id)}>
    <span>Delete</span>
    <MdDeleteForever className="icon" />
  </div>
);

export default DeleteButton;
