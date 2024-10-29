import utils from "../../utils";
import { adminActions } from "../AppActions";

const loginAdminAction =
  (token, admin, pwaUrl, company) => async (dispatch) => {
    dispatch({
      type: adminActions.LOGIN_ADMIN_ACTION,
      payload: { token, admin, pwaUrl, company },
    });
  };

const logoutAdminAction = () => {
  utils.clearLS();
};

export { loginAdminAction, logoutAdminAction };
