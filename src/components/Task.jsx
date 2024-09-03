import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import "../app.css";
import { FaCheck } from "react-icons/fa";

function Task({ task, onRemoveTask }) {
  const { id, content } = task;
  const [editable, setEditable] = useState(false);

  const removeTask = () => {
    onRemoveTask(id);
  };
  return (
    <div className="task">
      <div>
        {editable ? <input className="task-input" type="text" /> : content}
      </div>
      <div>
        <IoMdRemoveCircle className="task-icons" onClick={removeTask} />
        {editable ? (
          <FaCheck className="task-icons" />
        ) : (
          <RiEdit2Fill
            className="task-icons"
            onClick={() => {
              setEditable(true);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Task;
