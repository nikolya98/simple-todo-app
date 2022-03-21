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
  const [description, setDescrition] = useState(task.text);
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    setDescrition(e.target.value);
  };

  const toggleTask = (e) => {
    onEdit({ ...task, done: e.target.checked });
  };

  const handleDelete = useCallback(
    () => onDelete(task.id),
    [task.id, onDelete]
  );

  const startEdit = useCallback(() => setIsEdit(true), []);
  const stopEdit = () => {
    onEdit({ ...task, text: description });
    setIsEdit(false);
  };

  return (
    <>
      <CheckBox
        className="visually-hidden"
        isChecked={task.done}
        onChange={toggleTask}
        id={`checkbox-${task.id}`}
      />
      <label className={style.checkbox} htmlFor={`checkbox-${task.id}`} />
      {isEdit ? (
        <>
          <Input
            className={style.input}
            value={description}
            onChange={handleChange}
          />
          <Button
            className={`${style.save} ${style.button}`}
            onClick={stopEdit}
            aria-label="Save"
          />
        </>
      ) : (
        <>
          <p className={style.description}>{task.text}</p>
          <Button
            className={`${style.edit} ${style.button}`}
            onClick={startEdit}
            aria-label="Edit"
          />
        </>
      )}
      <Button
        className={`${style.delete} ${style.button}`}
        onClick={handleDelete}
        aria-label="Delete"
      />
    </>
  );
});

export default TasksList;
