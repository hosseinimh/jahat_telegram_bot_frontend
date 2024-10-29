import React from "react";

import { Button } from "../..";

const CancelButton = ({
  className = "px-12",
  strings = null,
  label = "",
  onClick = null,
}) => (
  <Button
    strings={strings}
    label={label}
    className={`bg-transparent text-deactive text-base font-bold ${className}`}
    onClick={onClick}
  />
);

export default CancelButton;
