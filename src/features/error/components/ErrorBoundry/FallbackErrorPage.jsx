import React from "react";

import { ComplexPrimaryButton, GuestBlankLayout } from "../../../../components";
import utils from "../../../../utils";
import Svg, { SvgPath } from "../../../../components/svg";
import { useAppContext } from "../../../../store";
import { ENV } from "../../../../config";

const FallbackErrorPage = () => {
  const {
    state: { adminState },
  } = useAppContext();
  const { errorFallbackPage: strings } = utils.getLSLocale();

  return (
    <GuestBlankLayout>
      <div className="flex flex-col justify-center items-center gap-6">
        <Svg
          SvgPath={<SvgPath.SvgIcon500 />}
          width="148"
          height="148"
          className="icon-complex"
          viewBox={"0 0 148 148"}
        />
        <h1 className="mt-10 text-subline font-medium text-xl">
          {strings.title}
        </h1>
        <ComplexPrimaryButton
          title={adminState?.admin ? strings.backHome : strings.backToLoginPage}
          onClick={() => {
            window.location.href = adminState?.admin
              ? ENV.homePage
              : ENV.loginPage;
          }}
        >
          <span>
            {adminState?.admin ? strings.backHome : strings.backToLoginPage}
          </span>
          <Svg
            SvgPath={<SvgPath.SvgChevronDown />}
            width="24"
            height="24"
            className="rotate-90 fill-white"
          />
        </ComplexPrimaryButton>
      </div>
    </GuestBlankLayout>
  );
};

export default FallbackErrorPage;
