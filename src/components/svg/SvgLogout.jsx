import React from "react";

const SvgLogout = ({ pathClassName = "" }) => (
  <>
    <path
      stroke="#EF5033"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 12H3M3.947 16C5.42 18.961 8.468 21 12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9C8.468 3 5.42 5.039 3.947 8"
      className={pathClassName}
    />
    <path
      stroke="#EF5033"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m12 9 3 3-3 3"
      className={pathClassName}
    />
  </>
);

export default SvgLogout;
