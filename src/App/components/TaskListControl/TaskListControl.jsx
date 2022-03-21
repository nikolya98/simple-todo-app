import { useCallback, useContext, useState } from "react";

import {
  TaskListContext,
  UpdatersContext,
} from "@app/contexts/TaskListContext";
import Button from "@components/Button";
import { getActiveTasks, getCompletedTasks } from "@utils/filters";

import TasksList from "../TasksList";
import style from "./TaskListControl.module.scss";

const TaskListControl = () => {
  const tasks = useContext(TaskListContext);
  const { clearTasks } = useContext(UpdatersContext);
  const [group, setGroup] = useState("all");
  let filteredTasks;

  switch (group) {
    case "active":
      filteredTasks = getActiveTasks(tasks);
      break;
    case "completed":
      filteredTasks = getCompletedTasks(tasks);
      break;
    default:
      filteredTasks = tasks;
  }

  const setAll = useCallback(() => setGroup("all"), []);
  const setActive = useCallback(() => setGroup("active"), []);
  const setCompleted = useCallback(() => setGroup("completed"), []);
  const handleClear = useCallback(() => {
    clearTasks();
    setActive("all");
  }, [clearTasks, setActive]);

  return (
    <>
      <TasksList tasks={filteredTasks} />
      <div className={style.wrapper}>
        <span className={style.info}>
          {getActiveTasks(tasks).length} tasks left
        </span>
        <Button
          className={`${style.button} ${style.all} ${
            group === "all" && style.highlight
          }`}
          onClick={setAll}
        >
          All
        </Button>
        <Button
          className={`${style.button} ${style.active} ${
            group === "active" && style.highlight
          }`}
          onClick={setActive}
        >
          Active
        </Button>
        <Button
          className={`${style.button} ${style.completed} ${
            group === "completed" && style.highlight
          }`}
          onClick={setCompleted}
        >
          Completed
        </Button>
        <Button
          className={`${style.button} ${style.clear}`}
          onClick={handleClear}
        >
          Clear
        </Button>
      </div>
    </>
  );
};

export default TaskListControl;
