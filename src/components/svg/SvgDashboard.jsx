import React from "react";

const SvgDashboard = ({ pathClassName }) => (
  <path
    stroke="#505050"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    d="M19 21h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2ZM19 9h-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2ZM5 3h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2ZM5 15h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2Z"
    className={pathClassName}
  />
);

export default SvgDashboard;
