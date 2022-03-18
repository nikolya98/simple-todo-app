import { memo } from "react";

const Button = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

// ? delete memo
export default memo(Button);
