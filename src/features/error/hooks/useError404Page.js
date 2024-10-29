import { useNavigate } from "react-router-dom";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { PAGES } from "../../../types";
import { useAppContext } from "../../../store";

const useError404Page = () => {
  const {
    state: { adminState },
  } = useAppContext();
  const navigate = useNavigate();
  const { error404Page: strings } = utils.getLSLocale();

  usePage(PAGES.Error404);

  return {
    strings,
    adminState,
    navigate,
  };
};

export default useError404Page;
