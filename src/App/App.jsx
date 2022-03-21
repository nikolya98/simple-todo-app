import { useCallback, useRef, useState } from "react";

import { mockTaks } from "@data/mockTasks";

import style from "./App.module.scss";
import AddTask from "./components/AddTask";
import TaskListControl from "./components/TaskListControl";

function App() {
  const [tasks, setTasks] = useState(mockTaks);
  const nextId = useRef(tasks.length);

  const addTask = useCallback(
    (text) => {
      setTasks((prev) => [...prev, { id: nextId.current, text, done: false }]);
      nextId.current += 1;
    },
    [nextId]
  );

  const deleteTask = useCallback((taskId) => {
    setTasks((prev) => prev.filter(({ id }) => id !== taskId));
  }, []);

  const editTask = useCallback((changedTask) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === changedTask.id) {
          return changedTask;
        }

        return task;
      })
    );
  }, []);

  const clearTasks = useCallback(() => setTasks([]), []);

  return (
    <div className={style.container}>
      <AddTask onAdd={addTask} />
      <div className={style.wrapper}>
        <TaskListControl
          tasks={tasks}
          onDelete={deleteTask}
          onEdit={editTask}
          onClear={clearTasks}
        />
      </div>
    </div>
  );
}

export default App;
