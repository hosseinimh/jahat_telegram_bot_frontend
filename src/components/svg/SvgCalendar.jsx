import React from "react";

const SvgCalendar = ({ pathClassName }) => (
  <>
    <path
      fill="#505050"
      fillRule="evenodd"
      d="M5 5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H5ZM2 6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6Z"
      clipRule="evenodd"
      className={pathClassName}
    />
    <path
      fill="#505050"
      fillRule="evenodd"
      d="M2 10a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM16 1a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1ZM8 1a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
      className={pathClassName}
    />
  </>
);

export default SvgCalendar;
