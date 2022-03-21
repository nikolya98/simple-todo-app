import { createContext, useContext, useMemo, useRef, useState } from "react";

import { mockTaks } from "@data/mockTasks";

export const TaskListContext = createContext([]);
export const useTaskListContext = () => useContext(TaskListContext);

export const UpdatersContext = createContext({});
export const useUpdatersContext = () => useContext(UpdatersContext);

const TaskListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(mockTaks);
  const nextId = useRef(tasks.length);

  const updaters = useMemo(
    () => ({
      addTask: (text) => {
        setTasks((prev) => [
          ...prev,
          { id: nextId.current, text, done: false },
        ]);
        nextId.current += 1;
      },

      deleteTask: (taskId) => {
        setTasks((prev) => prev.filter(({ id }) => id !== taskId));
      },

      editTask: (changedTask) => {
        setTasks((prev) =>
          prev.map((task) => {
            if (task.id === changedTask.id) {
              return changedTask;
            }

            return task;
          })
        );
      },

      clearTasks: () => setTasks([]),
    }),
    [nextId]
  );

  return (
    <TaskListContext.Provider value={tasks}>
      <UpdatersContext.Provider value={updaters}>
        {children}
      </UpdatersContext.Provider>
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
