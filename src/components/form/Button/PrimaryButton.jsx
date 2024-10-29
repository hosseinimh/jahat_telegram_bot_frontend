import React from "react";

import { Button } from "../..";

const PrimaryButton = ({
  className = "px-4",
  strings = null,
  label = "",
  onClick = null,
  loading = undefined,
}) => (
  <Button
    strings={strings}
    label={label}
    className={`bg-primary text-white text-base font-bold ${className}`}
    onClick={onClick}
    loading={loading}
  />
);

export default PrimaryButton;
