import React from "react";

const SvgPlus = ({ pathClassName }) => (
  <path
    stroke="#0097FB"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    d="M6 1.333v9.333M1.334 6h9.333"
    className={pathClassName}
  />
);

export default SvgPlus;
