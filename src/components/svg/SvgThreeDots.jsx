import React from "react";

const SvgThreeDots = ({ pathClassName }) => (
  <>
    <rect
      x=".5"
      width="3"
      height="3"
      rx="1.5"
      fill="#505050"
      className={pathClassName}
    />
    <rect
      x="5.5"
      width="3"
      height="3"
      rx="1.5"
      fill="#505050"
      className={pathClassName}
    />
    <rect
      x="10.5"
      width="3"
      height="3"
      rx="1.5"
      fill="#505050"
      className={pathClassName}
    />
  </>
);

export default SvgThreeDots;
