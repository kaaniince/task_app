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

  const updateTask = (newTask) => {
    const updatedTaks = tasks.map((task) => {
      if (task.id !== newTask.id) {
        return task;
      }
      return newTask;
    });
    setTasks([...updatedTaks]);
  };
  return (
    <div className="App">
      <div className="main">
        <TaskCreate onCreateTask={createTask} />
        <TaskList
          tasks={tasks}
          onRemoveTask={removeTask}
          onUpdateTask={updateTask}
        />
      </div>
    </div>
  );
}

export default App;
