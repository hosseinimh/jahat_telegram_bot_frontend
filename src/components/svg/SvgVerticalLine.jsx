import React from "react";

const SvgVerticalLine = ({ pathClassName, width, height }) => (
  <rect
    width={width}
    height={height}
    fill="none"
    rx="1.5"
    className={pathClassName}
  />
);

export default SvgVerticalLine;
