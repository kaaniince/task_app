import { useState } from "react";
import "../src/app.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const removeTask = (taskId) => {
    setTasks([...tasks.filter((task) => task.id !== taskId)]);
  };

  return (
    <div className="App">
      <div className="main">
        <TaskCreate onCreateTask={createTask} />
        <TaskList tasks={tasks} onRemoveTask={removeTask} />
      </div>
    </div>
  );
}

export default App;
