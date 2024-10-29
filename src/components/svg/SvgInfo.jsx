import React from "react";

const SvgInfo = ({ pathClassName }) => (
  <>
    <path
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM11 15.5h2.31"
      stroke="#505050"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathClassName}
    />
    <path
      d="M12.16 15.5v-4.25h-1.15M12.1 8.248a.25.25 0 1 1-.25-.25"
      stroke="#505050"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathClassName}
    />
    <path
      d="M11.85 7.998a.25.25 0 0 1 .25.25"
      stroke="#505050"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathClassName}
    />
  </>
);

export default SvgInfo;
