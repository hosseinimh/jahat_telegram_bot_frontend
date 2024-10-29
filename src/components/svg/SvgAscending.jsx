import React from "react";

const SvgAscending = () => (
  <>
    <g
      stroke="#58B961"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      clipPath="url(#a)"
    >
      <path d="M19.625 10.625V5H14" />
      <path d="m19.625 5-6.616 6.616a1.25 1.25 0 0 1-1.768 0L8.634 9.009a1.25 1.25 0 0 0-1.768 0L.875 15" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.25 0h20v20h-20z" />
      </clipPath>
    </defs>
  </>
);

export default SvgAscending;
