import { memo, useContext, useState } from "react";

import { UpdatersContext } from "@app/contexts/TaskListContext";
import Button from "@components/Button";
import Input from "@components/Input";

import style from "./AddTask.module.scss";

const AddTask = () => {
  const { addTask } = useContext(UpdatersContext);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    addTask(text);
    setText("");
  };

  return (
    <div className={style.wrapper}>
      <Input className={style.input} value={text} onChange={handleChange} />
      <Button className={style.button} onClick={handleClick}>
        Add
      </Button>
    </div>
  );
};

export default memo(AddTask);
