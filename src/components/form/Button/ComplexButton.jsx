import React from "react";

import { useAppContext } from "../../../store";

const ComplexButton = ({
  className = "px-12",
  title = "",
  onClick = null,
  children,
}) => {
  const {
    state: { layoutState },
  } = useAppContext();

  return (
    <button
      className={`flex flex-row justify-center items-center rounded-md gap-2 ${className}`}
      type="button"
      title={title}
      onClick={() => (onClick ? onClick() : null)}
      disabled={layoutState?.loading}
    >
      {children}
    </button>
  );
};

export default ComplexButton;
