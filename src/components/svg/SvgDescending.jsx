import React from "react";

const SvgDescending = () => (
  <>
    <g
      stroke="#EF5033"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      clipPath="url(#a)"
    >
      <path d="M19.625 9.375V15H14" />
      <path d="m19.625 15-6.616-6.616a1.25 1.25 0 0 0-1.768 0l-2.607 2.607a1.25 1.25 0 0 1-1.768 0L.875 5" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.25 0h20v20h-20z" />
      </clipPath>
    </defs>
  </>
);

export default SvgDescending;
