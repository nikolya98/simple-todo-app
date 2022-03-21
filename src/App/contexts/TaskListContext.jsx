import { createContext, useContext, useReducer, useEffect } from "react";

import { taskListReducer } from "@app/reducers/taskListReducer";
import { getMockTasks } from "@data/mockTasks";

export const TaskListContext = createContext([]);
export const useTaskListContext = () => useContext(TaskListContext);

export const DispatchContext = createContext(() => {});
export const useDispatchContext = () => useContext(DispatchContext);

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
    <TaskListContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </TaskListContext.Provider>
  );
};

export default TaskListContextProvider;
