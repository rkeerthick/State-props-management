import React from "react";

const TabButton = ({ children, value, isSelected, ...props }) => {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
