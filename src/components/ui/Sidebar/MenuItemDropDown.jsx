import React, { useMemo } from "react";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import Svg, { SvgPath } from "../../svg";
import { useAppContext } from "../../../store";

const MenuItemDropDown = ({ pages, SvgComponent, label }) => {
  const {
    state: { pageState },
  } = useAppContext();

  const toggleDropdown = (e) => {
    e.stopPropagation();

    if (e.target.nextSibling.classList.contains("expanded")) {
      slideMenuUp(e.target);
    } else {
      slideMenuDown(e.target);
    }
  };

  const slideMenuUp = (element) => {
    element.classList.remove("collapsed");
    element.lastChild.classList.remove("arrow-up");
    element.nextSibling.classList.remove("expanded");
    slideUp(element.nextSibling, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  const slideMenuDown = (element) => {
    element.classList.add("collapsed");
    element.lastChild.classList.add("arrow-up");
    element.nextSibling.classList.add("expanded");
    slideDown(element.nextSibling, {
      duration: 400,
      easing: easeOutQuint,
    });
  };

  return useMemo(
    () => (
      <li
        className={`flex flex-row items-center gap-4 menu-item dropdown`}
        onClick={(e) => toggleDropdown(e)}
      >
        <Svg
          SvgPath={<SvgComponent />}
          width="24"
          height="24"
          className="icon-complex mr-5"
        />
        <span className={`inline flex-1`}>{label}</span>
        <Svg
          SvgPath={<SvgPath.SvgChevronDown />}
          width="24"
          height="24"
          className={`icon${
            pages.includes(pageState?.page) ? " arrow-up" : ""
          }`}
        />
      </li>
    ),
    [pages]
  );
};

export default MenuItemDropDown;
