import Button from "@components/Button";
import CheckBox from "@components/CheckBox";

const TasksList = ({ tasks, onDelete, onEdit }) => {
  return (
    <ul>
      {tasks.map((task) => {
        return <Task task={task} onDelete={onDelete} onEdit={onEdit} />;
      })}
    </ul>
  );
};

const Task = ({ task, onDelete, onEdit }) => {
  return (
    <li>
      <CheckBox isChecked={task.done} />
      {task.text}
      <Button onClick={onEdit}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
    </li>
  );
};

export default TasksList;
