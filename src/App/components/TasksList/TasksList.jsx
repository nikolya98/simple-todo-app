import { useState, memo, useCallback } from "react";

import Button from "@components/Button";
import CheckBox from "@components/CheckBox";
import Input from "@components/Input";

import style from "./TasksList.module.scss";

const TasksList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li className={style.item} key={task.id}>
            <Task task={task} onDelete={onDelete} onEdit={onEdit} />
          </li>
        );
      })}
    </ul>
  );
};

const Task = memo(({ task, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = (e) => {
    onEdit({ ...task, text: e.target.value });
  };

  const handleComplete = (e) => {
    onEdit({ ...task, done: e.target.checked });
  };

  const handleDelete = useCallback(
    () => onDelete(task.id),
    [task.id, onDelete]
  );

  const startEdit = useCallback(() => setIsEdit(true), [setIsEdit]);
  const stopEdit = useCallback(() => setIsEdit(false), [setIsEdit]);

  return (
    <>
      <CheckBox
        className="visually-hidden"
        isChecked={task.done}
        onChange={handleComplete}
        id={`checkbox-${task.id}`}
      />
      <label className={style.checkbox} for={`checkbox-${task.id}`} />
      {isEdit ? (
        <>
          <Input
            className={style.input}
            value={task.text}
            onChange={handleEdit}
          />
          <Button
            className={`${style.save} ${style.button}`}
            onClick={stopEdit}
          >
            <span className="visually-hidden">Save</span>
          </Button>
        </>
      ) : (
        <>
          <p className={style.description}>{task.text}</p>
          <Button
            className={`${style.edit} ${style.button}`}
            onClick={startEdit}
            aria-label="Edit"
          >
            <span className="visually-hidden">Edit</span>
          </Button>
        </>
      )}
      <Button
        className={`${style.delete} ${style.button}`}
        onClick={handleDelete}
      >
        <span className="visually-hidden">delete</span>
      </Button>
    </>
  );
});

export default TasksList;
