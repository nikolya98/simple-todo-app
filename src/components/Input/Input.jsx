const Input = ({
  className = "",
  value = "",
  onChange = null,
  placeholder = "Add task...",
}) => {
  return (
    <input
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
