import { useState } from "react";
import "../src/app.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <div className="main">
        <TaskCreate />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
