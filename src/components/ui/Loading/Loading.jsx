import React from "react";
import Lottie from "lottie-react";

import utils from "../../../utils";
import loading from "../../../assets/json/loading.json";

const Loading = ({ style = {} }) => {
  const { general } = utils.getLSLocale();

  return (
    <div className="flex flex-col justify-center items-center gap-2 my-16 w-full h-28">
      <Lottie animationData={loading} loop={true} style={{ ...style }} />
      <span className="text-xs text-subline">{general.loading}</span>
    </div>
  );
};

export default Loading;
