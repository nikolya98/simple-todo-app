import { useState } from "react";

import { mockTaks } from "@data/mockTasks";

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState(mockTaks);

  return (
    <div>
      <AddTask />
      <TasksList tasks={tasks} />
    </div>
  );
}

export default App;
