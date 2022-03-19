import { useCallback, useRef, useState } from "react";

import { mockTaks } from "@data/mockTasks";

import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  const [tasks, setTasks] = useState(mockTaks);
  const nextId = useRef(tasks.length);

  const handleAdd = useCallback(
    (text) => {
      setTasks((prev) => [...prev, { id: nextId.current, text, done: false }]);
      nextId.current += 1;
    },
    [setTasks, nextId]
  );

  const handleDelete = useCallback(
    (taskId) => {
      setTasks((prev) => prev.filter(({ id }) => id !== taskId));
    },
    [setTasks]
  );

  const handleEdit = useCallback(
    (changedTask) => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === changedTask.id) {
            return changedTask;
          }

          return task;
        })
      );
    },
    [setTasks]
  );

  return (
    <div>
      <AddTask onAdd={handleAdd} />
      <TasksList tasks={tasks} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

export default App;
