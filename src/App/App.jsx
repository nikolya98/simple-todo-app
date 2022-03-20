import { useCallback, useEffect, useReducer } from "react";

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

  const addTask = useCallback((text) => {
    dispatch({
      type: "add",
      text,
    });
  }, []);

  const deleteTask = useCallback(
    (id) =>
      dispatch({
        type: "delete",
        id,
      }),
    []
  );

  const editTask = useCallback(
    (task) =>
      dispatch({
        type: "edit",
        task,
      }),
    []
  );

  const clearTasks = useCallback(() => dispatch({ type: "clear" }), []);

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
