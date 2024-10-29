import React from "react";

const SvgEdit = ({ pathClassName }) => (
  <>
    <g
      stroke="#0097FB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.75"
      clipPath="url(#a)"
      className={pathClassName}
    >
      <path d="M9.166 3.333H3.333A1.667 1.667 0 0 0 1.666 5v11.666a1.667 1.667 0 0 0 1.667 1.667h11.666a1.667 1.667 0 0 0 1.667-1.667v-5.833" />
      <path d="M15.416 2.083a1.768 1.768 0 0 1 2.5 2.5L9.999 12.5l-3.333.833L7.499 10l7.917-7.917Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </>
);

export default SvgEdit;
