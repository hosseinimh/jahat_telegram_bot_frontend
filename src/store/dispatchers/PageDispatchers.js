import { pageActions } from "../AppActions";

const changePageAction =
  (page, strings = null, useForm = null) =>
  async (dispatch) => {
    dispatch({
      type: pageActions.CHANGE_PAGE_ACTION,
      payload: { page, strings, useForm },
    });
  };

const setPagePropsAction = (props) => async (dispatch) => async (dispatch) => {
  dispatch({ type: pageActions.SET_PAGE_PROPS_ACTION, payload: props });
};

export { changePageAction, setPagePropsAction };
