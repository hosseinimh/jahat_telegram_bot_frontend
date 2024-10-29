import React from "react";

import Svg, { SvgPath } from "../../svg";
import { useAppContext } from "../../../store";

const SmDeleteButton = ({ title, onClick }) => {
  const {
    state: { layoutState },
  } = useAppContext();

  return (
    <button
      className="rounded border border-border-line w-8 h-8 flex flex-col justify-center items-center"
      onClick={onClick}
      title={title}
      disabled={layoutState?.loading}
    >
      <Svg
        SvgPath={<SvgPath.SvgDelete />}
        width="16"
        height="18"
        className="icon-complex"
        viewBox={"0 0 16 18"}
      />
    </button>
  );
};

export default SmDeleteButton;
