import React, { useState } from "react";
import "../app.css";

function TaskCreate({ onCreateTask }) {
  const [newTask, setNewTask] = useState("");

  const clearInput = () => {
    setNewTask("");
  };

  const createTask = () => {
    if (!newTask) return;

    const request = {
      id: Math.floor(Math.random() * 99999999),
      content: newTask,
    };
    onCreateTask(request);
    clearInput();
  };

  return (
    <div className="task-create">
      <input
        className="task-input"
        type="text"
        placeholder="Write a Task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button onClick={createTask} className="task-button">
        Create a Task{" "}
      </button>
    </div>
  );
}

export default TaskCreate;
