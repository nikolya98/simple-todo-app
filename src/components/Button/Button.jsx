import { memo } from "react";

const Button = ({ className = "", onClick, children, label = "" }) => {
  return (
    <button className={className} onClick={onClick} aria-label={label}>
      {children}
    </button>
  );
};

export default memo(Button);
