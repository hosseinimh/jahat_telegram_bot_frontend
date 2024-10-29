import React from "react";
import { Link } from "react-router-dom";

import Svg from "../../svg";
import { useAppContext } from "../../../store";

const MenuItemLink = ({ page, SvgComponent, label, link }) => {
  const {
    state: { pageState },
  } = useAppContext();

  return (
    <li>
      <Link
        to={link}
        className={`flex flex-row items-center gap-4 menu-item menu-link ${
          page === pageState?.page ? "selected" : ""
        }`}
      >
        <Svg
          SvgPath={<SvgComponent />}
          width="24"
          height="24"
          className="icon-complex mr-5"
        />
        <span className={`inline flex-1`}>{label}</span>
      </Link>
    </li>
  );
};

export default MenuItemLink;
