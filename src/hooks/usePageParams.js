import { useParams } from "react-router-dom";

import utils from "../utils";

const usePageParams = (paramsArray, message = null) => {
  const pageParams = useParams();
  const { general } = utils.getLSLocale();
  const params = {};

  message = message ?? general.pageParamsError;

  if (
    typeof paramsArray === "object" &&
    !Array.isArray(paramsArray) &&
    paramsArray !== null
  ) {
    return params;
  }

  paramsArray?.forEach((param) => {
    if (Object.hasOwn(pageParams, param)) {
      params[param] = pageParams[param];
    } else {
      return params;
    }
  });

  return params;
};

export default usePageParams;
