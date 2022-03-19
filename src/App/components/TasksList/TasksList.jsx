import { useState, memo, useCallback } from "react";

import Button from "@components/Button";
import CheckBox from "@components/CheckBox";
import Input from "@components/Input";

const TasksList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
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
    <div>
      <CheckBox isChecked={task.done} onChange={handleComplete} />
      {isEdit ? (
        <>
          <Input value={task.text} onChange={handleEdit} />
          <Button onClick={stopEdit}>Save</Button>
        </>
      ) : (
        <>
          {task.text}
          <Button onClick={startEdit}>Edit</Button>
        </>
      )}
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
});

export default TasksList;
