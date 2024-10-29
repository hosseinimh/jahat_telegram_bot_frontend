import React from "react";

const Svg = ({
  id = undefined,
  SvgPath,
  className = "",
  fill = undefined,
  width = "16",
  height = "16",
  viewBox = undefined,
  onClick = null,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id={id}
    width={width}
    height={height}
    viewBox={viewBox ? viewBox : `0 0 24 24`}
    className={className}
    fill={fill}
    onClick={() => {
      if (onClick) {
        onClick();
      }
    }}
  >
    {SvgPath}
  </svg>
);

export default Svg;
