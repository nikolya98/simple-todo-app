import { memo, useState } from "react";

import { useTaskListContext } from "@app/contexts/TaskListContext";
import Button from "@components/Button";
import Input from "@components/Input";

import style from "./AddTask.module.scss";

const AddTask = () => {
  const { dispatch } = useTaskListContext();
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addTask = () => {
    dispatch({
      type: "add",
      text,
    });
    setText("");
  };

  return (
    <div className={style.wrapper}>
      <Input className={style.input} value={text} onChange={handleChange} />
      <Button className={style.button} onClick={addTask}>
        Add
      </Button>
    </div>
  );
};

export default memo(AddTask);
