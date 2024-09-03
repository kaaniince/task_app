import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import "../app.css";
import { FaCheck } from "react-icons/fa";

function Task({ task, onRemoveTask, onUpdateTask }) {
  const { id, content } = task;
  const [editable, setEditable] = useState(false);
  const [newTask, setNewTask] = useState(content);

  const removeTask = () => {
    onRemoveTask(id);
  };

  const updateTask = () => {
    const request = {
      id: id,
      content: newTask,
    };
    onUpdateTask(request);
    setEditable(false);
  };

  return (
    <div className="task">
      <div>
        {editable ? (
          <input
            className="task-input"
            type="text"
            value={newTask}
            style={{ width: "380px" }}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoMdRemoveCircle className="task-icons" onClick={removeTask} />
        {editable ? (
          <FaCheck className="task-icons" onClick={updateTask} />
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
