import React from "react";

const Tabs = ({ children, buttons, buttonWrapper }) => {
  const ButtonWrapper = buttonWrapper;
  return (
    <>
      <ButtonWrapper>{buttons}</ButtonWrapper>
      {children}
    </>
  );
};

export default Tabs;
