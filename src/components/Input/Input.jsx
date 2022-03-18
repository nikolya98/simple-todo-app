import { memo, useState } from "react";

const Input = ({
  className = "",
  initValue = "",
  onChange = null,
  placeholder = "Add task...",
}) => {
  const [value, setValue] = useState(initValue);
  const handleChange = (e) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <input
      className={className}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default memo(Input);
