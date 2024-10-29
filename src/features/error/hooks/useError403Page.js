import { useNavigate } from "react-router-dom";

import utils from "../../../utils";
import { usePage } from "../../../hooks";
import { PAGES } from "../../../types";
import { useAppContext } from "../../../store";

const useError403Page = () => {
  const {
    state: { adminState },
  } = useAppContext();
  const navigate = useNavigate();
  const { error403Page: strings } = utils.getLSLocale();

  usePage(PAGES.Error403);

  return {
    strings,
    adminState,
    navigate,
  };
};

export default useError403Page;
