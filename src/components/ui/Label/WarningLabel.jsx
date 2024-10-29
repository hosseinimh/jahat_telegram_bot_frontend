import React from "react";

const WarningLabel = ({ label }) => (
  <span className="rounded-full bg-warning-light text-warning py-1 px-2 w-16">
    {label}
  </span>
);

export default WarningLabel;
