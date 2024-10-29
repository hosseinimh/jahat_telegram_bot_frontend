import React from "react";

const SvgPromotion = ({ pathClassName }) => (
  <path
    stroke="#505050"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    d="m11.5 13.762.694 4.166a2.22 2.22 0 1 1-4.378.729L7 13.762M13.75 13.762H5.875a3.375 3.375 0 1 1 0-6.75h7.875M13.75 7.012l5.001-3.334a1.125 1.125 0 0 1 1.749.937V16.16a1.125 1.125 0 0 1-1.749.936l-5.001-3.334M13.75 13.76V7.01"
    className={pathClassName}
  />
);

export default SvgPromotion;
