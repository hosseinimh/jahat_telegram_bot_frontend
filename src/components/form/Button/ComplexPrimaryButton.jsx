import React from "react";

import { useAppContext } from "../../../store";

const ComplexPrimaryButton = ({
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
      className={`h-10 py-2 px-4 flex flex-row justify-center items-center font-medium rounded-md gap-2 bg-primary text-white text-base ${className}`}
      type="button"
      title={title}
      onClick={() => (onClick ? onClick() : null)}
      disabled={layoutState?.loading}
    >
      {children}
    </button>
  );
};

export default ComplexPrimaryButton;
