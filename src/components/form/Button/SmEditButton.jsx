import React from "react";

import Svg, { SvgPath } from "../../svg";
import { useAppContext } from "../../../store";

const SmEditButton = ({ title, onClick }) => {
  const {
    state: { layoutState },
  } = useAppContext();

  return (
    <button
      className="rounded bg-primary-light w-8 h-8 flex flex-col justify-center items-center"
      onClick={onClick}
      title={title}
      disabled={layoutState?.loading}
    >
      <Svg
        SvgPath={<SvgPath.SvgEdit pathClassName={"stroke-primary"} />}
        width="20"
        height="20"
        className="icon-complex"
        viewBox={"0 0 20 20"}
      />
    </button>
  );
};

export default SmEditButton;
