import { memo, useState } from "react";

import Button from "@components/Button";
import Input from "@components/Input";

import style from "./AddTask.module.scss";

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
    <div className={style.wrapper}>
      <Input className={style.input} value={task} onChange={handleChange} />
      <Button className={style.button} onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default memo(AddTask);
