import { useEffect, useReducer } from "react";

import { getMockTasks } from "@data/mockTasks";

import style from "./App.module.scss";
import AddTask from "./components/AddTask";
import TaskListControl from "./components/TaskListControl";
import { taskListReducer } from "./reducers/taskListReducer";

function App() {
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
    <div className={style.container}>
      <AddTask dispatch={dispatch} />
      <div className={style.wrapper}>
        <TaskListControl tasks={tasks} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
