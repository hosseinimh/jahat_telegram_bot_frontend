import React from "react";

const SvgDocument = ({ pathClassName }) => (
  <>
    <path
      d="m36.828 12.828-5.656-5.656A4.001 4.001 0 0 0 28.344 6H14c-2.21 0-4 1.79-4 4v28c0 2.21 1.79 4 4 4h20c2.21 0 4-1.79 4-4V15.656c0-1.06-.422-2.078-1.172-2.828Z"
      stroke="#0097FB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathClassName}
    />
    <path
      d="M18 24h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H18a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2ZM32 30H16M26 24v12M38 16h-8a2 2 0 0 1-2-2V6"
      stroke="#0097FB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathClassName}
    />
  </>
);

export default SvgDocument;
