import React from "react";

import Svg, { SvgPath } from "../../svg";
import { useAppContext } from "../../../store";

const ExportButton = ({ label, onClick }) => {
  const {
    state: { layoutState },
  } = useAppContext();

  return (
    <button
      className="flex flex-row justify-center items-center px-4 py-2 rounded bg-white border-2 border-primary text-sm text-primary font-medium"
      onClick={onClick}
      disabled={layoutState?.loading}
    >
      <Svg
        SvgPath={<SvgPath.SvgExport pathClassName={"stroke-primary"} />}
        width="16"
        height="16"
        className="icon-complex ml-4"
        viewBox={"0 0 16 16"}
      />
      {label}
    </button>
  );
};

export default ExportButton;
