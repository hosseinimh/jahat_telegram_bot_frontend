import React from "react";

import {
  AuthLayout,
  ComplexPrimaryButton,
  GuestBlankLayout,
} from "../../../../components";
import Svg, { SvgPath } from "../../../../components/svg";
import { useError403Page } from "../../hooks";

const Error403Page = () => {
  const service = useError403Page();

  const renderContent = () => (
    <div className="flex flex-col justify-center items-center gap-6">
      <Svg
        SvgPath={<SvgPath.SvgIcon403 />}
        width="124"
        height="124"
        className="icon-complex"
        viewBox={"0 0 124 124"}
      />
      <h1 className="mt-10 text-subline font-medium text-xl">
        {service.strings.title}
      </h1>
      <ComplexPrimaryButton
        title={service.service.strings.btnBack}
        onClick={() => window.history.go(-1)}
      >
        <span>{service.strings.btnBack}</span>
        <Svg
          SvgPath={<SvgPath.SvgChevronDown />}
          width="24"
          height="24"
          className="rotate-90 fill-white"
        />
      </ComplexPrimaryButton>
    </div>
  );

  if (service.adminState?.admin) {
    return <AuthLayout>{renderContent()}</AuthLayout>;
  }

  return <GuestBlankLayout>{renderContent()}</GuestBlankLayout>;
};

export default Error403Page;
