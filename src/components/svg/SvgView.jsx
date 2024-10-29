import React from "react";

const SvgView = ({ pathClassName }) => (
  <>
    <g
      stroke="#0097FB"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      clipPath="url(#a)"
      className={pathClassName}
    >
      <path d="M.666 8s2.667-5.333 7.333-5.333C12.666 2.667 15.333 8 15.333 8s-2.667 5.334-7.334 5.334C3.333 13.334.666 8 .666 8Z" />
      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </>
);

export default SvgView;
