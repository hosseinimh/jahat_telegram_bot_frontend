import React from "react";

const SubMenuContainer = ({ children }) => {
  return (
    <li className="sub-menu">
      <ul>{children}</ul>
    </li>
  );
};

export default SubMenuContainer;
