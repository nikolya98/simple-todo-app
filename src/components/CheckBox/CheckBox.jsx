const CheckBox = ({ className = "", onChange, isChecked, id = "" }) => {
  return (
    <input
      type="checkbox"
      className={className}
      onChange={onChange}
      checked={isChecked}
      id={id}
    />
  );
};

export default CheckBox;
