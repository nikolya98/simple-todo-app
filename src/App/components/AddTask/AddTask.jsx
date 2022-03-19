import { memo, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";

const AddTask = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    onAdd(task);
    setTask("");
  };

  return (
    <>
      <Input value={task} onChange={handleChange} />
      <Button onClick={handleClick}>Add</Button>
    </>
  );
};

export default memo(AddTask);
