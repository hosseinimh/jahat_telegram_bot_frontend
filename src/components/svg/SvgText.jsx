import React from "react";

const SvgText = ({ pathClassName }) => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.2 5c-.345 0-.7.306-.7.778v12.444c0 .473.355.778.7.778h13.3a1 1 0 0 0 1-1V5.778c0-.472-.355-.778-.7-.778H5.2Zm-2.7.778C2.5 4.287 3.667 3 5.2 3h13.6c1.533 0 2.7 1.287 2.7 2.778V18a3 3 0 0 1-3 3H5.2c-1.533 0-2.7-1.287-2.7-2.778V5.778Z"
      fill="#505050"
      className={pathClassName}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.5 12a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM6.5 8a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1ZM11.5 16a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      fill="#505050"
      className={pathClassName}
    />
  </>
);

export default SvgText;
