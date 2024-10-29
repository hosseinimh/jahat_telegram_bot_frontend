import React, { useEffect, useState } from "react";

import { useAppContext } from "../../../store";

const Button = ({
  className = "",
  strings = null,
  label = "",
  onClick = null,
  beforeIcon = null,
  loading = undefined,
}) => {
  const {
    state: { layoutState, pageState },
  } = useAppContext();

  const [btnLabel, setBtnLabel] = useState(
    strings && label in strings ? strings[label] : ""
  );

  useEffect(() => {
    if (!strings) {
      setBtnLabel(
        pageState?.strings && label in pageState.strings
          ? pageState?.strings[label]
          : ""
      );
    }
  }, [pageState]);

  return (
    <button
      className={`h-10 py-2 flex flex-row justify-center items-center font-medium rounded-md gap-2 ${className}`}
      type="button"
      title={btnLabel}
      onClick={() => (onClick ? onClick() : null)}
      disabled={loading ?? layoutState?.loading}
    >
      {beforeIcon}
      {btnLabel}
    </button>
  );
};

export default Button;
