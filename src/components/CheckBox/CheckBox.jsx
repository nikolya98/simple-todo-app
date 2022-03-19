const CheckBox = ({ onChange, isChecked }) => {
  return <input type="checkbox" onChange={onChange} checked={isChecked} />;
};

export default CheckBox;
