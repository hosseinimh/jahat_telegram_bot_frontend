import utils from "../../utils";
import { messageActions } from "../AppActions";

const setMessageAction =
  (
    message,
    messageType,
    messageCode,
    messageRender = true,
    messageField = null
  ) =>
  async (dispatch) => {
    dispatch({
      type: messageActions.SET_MESSAGE_ACTION,
      payload: {
        message: utils.localeDigits(message),
        messageType,
        messageCode,
        messageRender,
        messageField,
      },
    });
  };

const setRenderMessageAction = () => async (dispatch) => {
  dispatch({
    type: messageActions.SET_RENDER_MESSAGE_ACTION,
  });
};

const clearMessageAction = () => async (dispatch) => {
  dispatch({
    type: messageActions.CLEAR_MESSAGE_ACTION,
  });
};

const clearInstantMessageAction = () => async (dispatch) => {
  dispatch({
    type: messageActions.CLEAR_MESSAGE_ACTION,
  });
};

export {
  setMessageAction,
  setRenderMessageAction,
  clearMessageAction,
  clearInstantMessageAction,
};
