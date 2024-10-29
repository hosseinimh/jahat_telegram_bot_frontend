import React from "react";

const SvgClock = () => (
  <>
    <g clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#B2B2B2">
      <path d="M8 1.833a6.167 6.167 0 1 0 0 12.333A6.167 6.167 0 0 0 8 1.833ZM.835 8a7.167 7.167 0 1 1 14.333 0A7.167 7.167 0 0 1 .834 8Z" />
      <path d="M8 3.5a.5.5 0 0 1 .5.5v3.69l2.39 1.196a.5.5 0 0 1-.446.894L7.777 8.447A.5.5 0 0 1 7.501 8V4a.5.5 0 0 1 .5-.5Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </>
);

export default SvgClock;
