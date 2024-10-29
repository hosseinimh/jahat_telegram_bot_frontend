import React from "react";

const SvgUser = ({ pathClassName }) => (
  <>
    <path
      stroke="#505050"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3.9 17c1.6-1.5 3.7-2.5 6.1-2.5 2.3 0 4.5.9 6.1 2.5M12.1 6.4c1.2 1.2 1.2 3.1 0 4.2s-3.1 1.2-4.2 0-1.2-3.1 0-4.2 3-1.2 4.2 0Z"
      className={pathClassName}
    />
    <path
      stroke="#505050"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M2 14c-.6-1.2-1-2.6-1-4 0-5 4-9 9-9s9 4 9 9c0 1.4-.4 2.8-1 4"
      className={pathClassName}
    />
  </>
);

export default SvgUser;
