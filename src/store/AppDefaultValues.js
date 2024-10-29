import utils from "../utils";

const adminDefaultValues = {
  token: localStorage.getItem("token") ?? null,
  admin: utils.getLSAdmin() ?? null,
};

const layoutDefaultValues = {
  pwaUrl: utils.getLSVariable("pwa-url") ?? null,
  company: utils.getLSVariable("company") ?? null,
  loading: false,
  locale: utils.initLocale(),
  modals: [],
  shownModal: null,
};

const messageDefaultValues = {
  message: null,
  messageType: null,
  messageCode: 0,
  messageRender: false,
  messageField: null,
};

const pageDefaultValues = {
  page: "",
  strings: {},
  useForm: null,
  props: {},
};

export const appDefaultValues = {
  adminState: adminDefaultValues,
  layoutState: layoutDefaultValues,
  messageState: messageDefaultValues,
  pageState: pageDefaultValues,
};
