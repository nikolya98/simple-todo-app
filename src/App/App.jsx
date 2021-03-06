import { useCallback, useRef, useState } from "react";

import { mockTaks } from "@data/mockTasks";

import style from "./App.module.scss";
import AddTask from "./components/AddTask";
import TaskListControl from "./components/TaskListControl";

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

  const handleClear = useCallback(() => setTasks([]), [setTasks]);

  return (
    <div className={style.container}>
      <AddTask onAdd={handleAdd} />
      <div className={style.wrapper}>
        <TaskListControl
          tasks={tasks}
          onDelete={handleDelete}
          onEdit={handleEdit}
          onClear={handleClear}
        />
      </div>
    </div>
  );
}

export default App;
