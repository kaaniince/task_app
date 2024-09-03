import React from "react";
import Task from "./Task";

function TaskList({ tasks, onRemoveTask, onUpdateTask }) {
  return (
    <div className="taskList">
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onRemoveTask={onRemoveTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
    </div>
  );
}

export default TaskList;
