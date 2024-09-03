import React from "react";
import "../app.css";

function TaskCreate() {
  return (
    <div className="task-create">
      <input className="task-input" type="text" placeholder="Todo giriniz" />
      <button className="task-button">Task Oluştur</button>
    </div>
  );
}

export default TaskCreate;
