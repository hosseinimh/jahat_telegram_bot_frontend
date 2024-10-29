import React from "react";

const SvgClose = ({ pathClassName }) => (
  <>
    <path
      fill="#505050"
      fillRule="evenodd"
      d="M18.707 5.293a1 1 0 0 1 0 1.414l-12 12a1 1 0 0 1-1.414-1.414l12-12a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
      className={pathClassName}
    />
    <path
      fill="#505050"
      fillRule="evenodd"
      d="M5.293 5.293a1 1 0 0 1 1.414 0l12 12a1 1 0 0 1-1.414 1.414l-12-12a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
      className={pathClassName}
    />
  </>
);

export default SvgClose;
