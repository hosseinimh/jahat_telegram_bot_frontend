import React from "react";

import {
  AuthBlankLayout,
  ComplexPrimaryButton,
  GuestBlankLayout,
} from "../../../../components";
import Svg, { SvgPath } from "../../../../components/svg";
import { useError404Page } from "../../hooks";

const Error404Page = () => {
  const service = useError404Page();

  const renderContent = (title, link) => (
    <div className="flex flex-col justify-center items-center gap-6">
      <Svg
        SvgPath={<SvgPath.SvgIcon404 />}
        width="372"
        height="147"
        className="icon-complex"
        viewBox={"0 0 372 147"}
      />
      <h1 className="mt-10 text-subline font-medium text-xl">
        {service.strings.title}
      </h1>
      <ComplexPrimaryButton
        title={title}
        onClick={() => service.navigate(`${link}`)}
      >
        <span>{title}</span>
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
    return (
      <AuthBlankLayout>
        {renderContent(service.strings.authBtnBack, `/`)}
      </AuthBlankLayout>
    );
  }

  return (
    <GuestBlankLayout>
      {renderContent(service.strings.guestBtnBack, `/admins/login`)}
    </GuestBlankLayout>
  );
};

export default Error404Page;
