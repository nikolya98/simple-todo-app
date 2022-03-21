import { createContext, useContext, useReducer, useEffect } from "react";

import { taskListReducer } from "@app/reducers/taskListReducer";
import { getMockTasks } from "@data/mockTasks";

export const TaskListContext = createContext({
  tasks: [],
  dispatch: () => {},
});

export const useTaskListContext = () => useContext(TaskListContext);

const TaskListContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  useEffect(
    () =>
      (async () => {
        const mockTasks = await getMockTasks();
        dispatch({
          type: "fetch",
          tasks: mockTasks,
        });
      })(),
    []
  );

  return (
    <TaskListContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
