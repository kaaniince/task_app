import React from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import "../app.css";

function Task() {
  return (
    <div className="task">
      <div>İlk task</div>
      <div>
        <IoMdRemoveCircle className="task-icons" />
        <RiEdit2Fill className="task-icons" />
      </div>
    </div>
  );
}

export default Task;
