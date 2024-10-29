import React from "react";

import { Button } from "../..";

const WhiteButton = ({
  className = "px-12",
  strings = null,
  label = "",
  onClick = null,
  beforeIcon = null,
}) => {
  return (
    <Button
      strings={strings}
      label={label}
      className={`bg-white text-subline border border-border-line text-base ${className}`}
      onClick={onClick}
      beforeIcon={beforeIcon}
    />
  );
};

export default WhiteButton;
