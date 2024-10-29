import utils from "../../utils";
import { layoutActions } from "../AppActions";

const setLoadingAction = (loading) => async (dispatch) => {
  dispatch({
    type: layoutActions.SET_LOADING_ACTION,
    payload: loading,
  });
};

const setLocaleAction = (locale) => async (dispatch) => {
  utils.setLSVariable("locale", locale);
  dispatch({
    type: layoutActions.SET_LOCALE_ACTION,
    payload: locale,
  });
};

const setDropDownElementAction = (element) => async (dispatch) => {
  dispatch({
    type: layoutActions.SET_DROP_DOWN_ELEMENT_ACTION,
    payload: element,
  });
};

const setShownModalAction =
  (modal, props = null) =>
  async (dispatch) => {
    dispatch({
      type: layoutActions.SET_SHOWN_MODAL_ACTION,
      payload: { modal, props },
    });
  };

export {
  setLoadingAction,
  setLocaleAction,
  setDropDownElementAction,
  setShownModalAction,
};
