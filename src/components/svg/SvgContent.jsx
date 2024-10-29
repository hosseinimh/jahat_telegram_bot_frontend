import React from "react";

const SvgContent = ({ pathClassName }) => (
  <path
    stroke="#505050"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    d="M10 19H4.7c-.939 0-1.7-.796-1.7-1.778V4.778C3 3.796 3.761 3 4.7 3h13.6c.939 0 1.7.796 1.7 1.778V9M9 7h6M7 11h8M7 15h3M17.293 20.707l4.414-4.414a.999.999 0 0 0 0-1.414l-1.586-1.586a.999.999 0 0 0-1.414 0l-4.414 4.414a.999.999 0 0 0-.293.707V21h2.586a.999.999 0 0 0 .707-.293Z"
    className={pathClassName}
  />
);

export default SvgContent;
