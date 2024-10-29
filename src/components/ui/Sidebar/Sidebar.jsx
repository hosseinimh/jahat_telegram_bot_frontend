import React, { useEffect } from "react";
import { slideDown, slideUp } from "es6-slide-up-down";
import { easeOutQuint } from "es6-easings";

import { SvgPath } from "../../svg";
import utils from "../../../utils";
import { PAGES } from "../../../types";
import { useAppContext } from "../../../store";
import { logoutAdminAction } from "../../../store/dispatchers";
import MenuItemLink from "./MenuItemLink";
import { ENV } from "../../../config";

const Sidebar = () => {
  const {
    state: { pageState },
  } = useAppContext();
  const { sidebar: strings } = utils.getLSLocale();

  useEffect(() => {
    if (!pageState?.page) {
      return;
    }

    const elements = document.querySelectorAll(".arrow-up");

    if (elements.length > 0) {
      slideMenuDown(elements[0].parentElement);
    } else {
      [...document.querySelectorAll(".expanded")].forEach((element) => {
        slideMenuUp(element.previousSibling);
      });
    }
  }, [pageState?.page]);

  const slideMenuUp = (element) => {
    try {
      element.lastChild.classList.remove("arrow-up");
      element.nextSibling.classList.remove("expanded");
      slideUp(element.nextSibling, {
        duration: 400,
        easing: easeOutQuint,
      });
    } catch {}
  };

  const slideMenuDown = (element) => {
    try {
      element.lastChild.classList.add("arrow-up");
      element.nextSibling.classList.add("expanded");
      slideDown(element.nextSibling, {
        duration: 400,
        easing: easeOutQuint,
      });
    } catch {}
  };

  const logout = () => {
    logoutAdminAction();
    window.location.href = ENV.loginPage;
  };

  if (!pageState?.page) {
    return;
  }

  return (
    <div className="sidebar flex flex-col min-w-72 w-72 bg-white h-[calc(100vh-4rem)]">
      <div className="menu-container py-4 pr-0 pl-4 flex flex-col flex-1 justify-between">
        <ul>
          <MenuItemLink
            page={PAGES.Dashboard}
            SvgComponent={SvgPath.SvgDashboard}
            label={strings.dashboard}
            link={"/"}
          />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
