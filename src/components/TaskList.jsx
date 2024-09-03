import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemoveTask }) {
  return (
    <div className="taskList">
      {tasks &&
        tasks.map((task) => (
          <Task key={task.id} task={task} onRemoveTask={onRemoveTask} />
        ))}
    </div>
  );
}

export default TaskList;
