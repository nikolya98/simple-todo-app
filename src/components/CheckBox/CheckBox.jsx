import { memo } from "react";

const CheckBox = ({ onChange, isChecked }) => {
  return <input type="checkbox" onChange={onChange} checked={isChecked} />;
};

// ? delete memo
export default memo(CheckBox);
