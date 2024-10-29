import { MESSAGE_CODES } from "../types/messageCodes";
import {
  adminActions,
  layoutActions,
  messageActions,
  pageActions,
} from "./AppActions";
import { appDefaultValues } from "./AppDefaultValues";

export const appReducer = (state = appDefaultValues, { type, payload }) => {
  switch (type) {
    case adminActions.LOGIN_ADMIN_ACTION:
      return {
        ...state,
        adminState: {
          ...state.adminState,
          token: payload.token,
          admin: payload.admin,
        },
        layoutState: {
          ...state.layoutState,
          pwaUrl: payload.pwaUrl,
          company: payload.company,
        },
      };
    case layoutActions.SET_LOADING_ACTION:
      return {
        ...state,
        layoutState: { ...state.layoutState, loading: payload },
      };
    case layoutActions.SET_LOCALE_ACTION:
      return {
        ...state,
        layoutState: { ...state.layoutState, locale: payload },
      };
    case layoutActions.SET_DROP_DOWN_ELEMENT_ACTION:
      return {
        ...state,
        layoutState: { ...state.layoutState, dropDownElement: payload },
      };
    case layoutActions.SET_SHOWN_MODAL_ACTION:
      if (payload === null || payload.modal === null) {
        let modals = [...state.layoutState.modals];
        let shownModal = null;

        if (modals.length === 0) {
          shownModal = null;
        } else {
          modals.pop();
          shownModal = modals[modals.length - 1];
        }

        return {
          ...state,
          layoutState: {
            ...state.layoutState,
            modals,
            shownModal,
          },
        };
      } else {
        let modals = [...state.layoutState.modals];

        if (modals.find((modal) => modal.modal === payload.modal)) {
          return {
            ...state,
          };
        }

        modals.push(payload);

        return {
          ...state,
          layoutState: {
            ...state.layoutState,
            modals,
            shownModal: payload,
          },
        };
      }
    case messageActions.SET_MESSAGE_ACTION:
      return {
        ...state,
        messageState: {
          ...state.messageState,
          message: payload.message,
          messageType: payload.messageType,
          messageCode:
            parseInt(payload.messageCode) ?? MESSAGE_CODES.CLIENT_ERROR,
          messageRender: payload.messageRender,
          messageField: payload.messageField,
        },
      };
    case messageActions.SET_RENDER_MESSAGE_ACTION:
      return {
        ...state,
        messageState: {
          ...state.messageState,
          ...state,
          messageRender: true,
        },
      };
    case messageActions.CLEAR_MESSAGE_ACTION:
      return {
        ...state,
        messageState: {
          ...state.messageState,
          message: null,
          messageType: null,
          messageCode: 0,
          messageRender: false,
          messageField: null,
        },
      };
    case pageActions.CHANGE_PAGE_ACTION:
      if (
        state.pageState.page === payload.page &&
        state.pageState.strings === payload.strings &&
        state.pageState.useForm === payload.useForm
      ) {
        return state;
      }

      return {
        ...state,
        pageState: {
          ...state.pageState,
          page: payload?.page,
          strings: payload?.strings,
          useForm: payload?.useForm,
        },
      };
    case pageActions.SET_PAGE_PROPS_ACTION:
      return {
        ...state,
        pageState: {
          ...state.pageState,
          props: payload?.props,
        },
      };
    default:
      return state;
  }
};
