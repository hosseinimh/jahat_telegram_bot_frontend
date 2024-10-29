import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import { useAppContext } from "../../../store";
import Svg, { SvgPath } from "../../svg";

const SubMenuItem = ({ pages, label, link }) => {
  const {
    state: { pageState },
  } = useAppContext();

  return useMemo(
    () => (
      <li>
        <Link
          to={link}
          className={`flex flex-row items-center gap-4 menu-item menu-link ${
            pages.includes(pageState?.page) ? "selected" : ""
          }`}
        >
          <div
            style={{ width: "24px" }}
            className="flex flex-row justify-center mr-5"
          >
            <Svg
              SvgPath={
                <SvgPath.SvgVerticalLine
                  width="3"
                  height="16"
                  pathClassName={"fill-subline"}
                />
              }
              width="3"
              height="16"
              viewBox="0 0 3 16"
            />
          </div>
          <span className={`inline flex-1`}>{label}</span>
        </Link>
      </li>
    ),
    [pages]
  );
};

export default SubMenuItem;
