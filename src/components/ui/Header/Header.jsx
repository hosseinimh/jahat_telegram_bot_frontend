import React from "react";

import utils from "../../../utils";
import Svg, { SvgPath } from "../../svg";
import { useAppContext } from "../../../store";

const Header = () => {
  const {
    state: { layoutState },
    dispatch,
  } = useAppContext();
  const { header: strings } = utils.getLSLocale();

  return (
    <div className="header flex flex-row justify-center px-3 py-2 bg-white z-50">
      <div className="flex flex-row items-center flex-1 gap-3">
        <div className="logo w-12 h-12 bg-no-repeat bg-cover rounded-full"></div>
        <div className="flex flex-col">
          <h1 className="text-base leading-8">{strings.title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
