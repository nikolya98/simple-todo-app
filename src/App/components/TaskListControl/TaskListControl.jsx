import { useCallback, useState } from "react";

import Button from "@components/Button";
import { getActiveTasks, getCompletedTasks } from "@utils/filters";

import TasksList from "../TasksList";
import style from "./TaskListControl.module.scss";

const TaskListControl = ({ tasks, onClear, onDelete, onEdit }) => {
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
    onClear();
    setActive("all");
  }, [onClear]);

  return (
    <>
      <TasksList tasks={filteredTasks} onDelete={onDelete} onEdit={onEdit} />
      <div className={style.wrapper}>
        <span className={style.info}>
          {getActiveTasks(tasks).length} tasks left
        </span>
        <Button className={`${style.button} ${style.all}`} onClick={setAll}>
          All
        </Button>
        <Button
          className={`${style.button} ${style.active}`}
          onClick={setActive}
        >
          Active
        </Button>
        <Button
          className={`${style.button} ${style.completed}`}
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
