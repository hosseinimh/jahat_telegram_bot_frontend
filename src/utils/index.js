import CryptoJS from "crypto-js";

import ENV from "../config/config";
import { LOCALES } from "../types/locales";
import { fa_IR } from "../types/lang";
import { MESSAGE_TYPES } from "../types/messageTypes";
import { MESSAGE_CODES } from "../types/messageCodes";
import {
  clearMessageAction,
  setLoadingAction,
  setMessageAction,
} from "../store/dispatchers";

const isJsonString = (str) => {
  try {
    str = JSON.stringify(str);
    str = str
      .replace(/\\n/g, "\\n")
      .replace(/\\'/g, "\\'")
      .replace(/\\"/g, '\\"')
      .replace(/\\&/g, "\\&")
      .replace(/\\r/g, "\\r")
      .replace(/\\t/g, "\\t")
      .replace(/\\b/g, "\\b")
      .replace(/\\f/g, "\\f");
    str = str.replace(/[\u0000-\u0019]+/g, "");
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

const initLocale = () => {
  const locale = getLSVariable("locale");

  if (![LOCALES.FA_IR].includes(locale)) {
    setLSVariable("locale", LOCALES.FA_IR);
  }

  return getLSVariable("locale");
};

function parseJwt(token) {
  try {
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
}

function clearLS() {
  localStorage.removeItem("token");
  localStorage.removeItem("admin");
  localStorage.removeItem("locale");
  localStorage.removeItem("pwa-url");
}

const getLSVariable = (key) => {
  try {
    const text = localStorage.getItem(key);

    if (!text) {
      return null;
    }

    const bytes = CryptoJS.AES.decrypt(text, ENV.name);
    const value = bytes.toString(CryptoJS.enc.Utf8);

    return value;
  } catch (error) {
    return null;
  }
};

const setLSVariable = (key, value) => {
  try {
    const text = CryptoJS.AES.encrypt(value, ENV.name).toString();
    localStorage.setItem(key, text);
  } catch (error) {}
};

const getLSToken = () => {
  const token = getLSVariable("token");

  if (!token) {
    clearLS();

    return null;
  }

  const decodedToken = parseJwt(token);

  if (!decodedToken) {
    clearLS();

    return null;
  }

  return token;
};

const getLSAdmin = () => {
  let admin = getLSVariable("admin");

  if (!admin) {
    clearLS();

    return null;
  }

  try {
    admin = JSON.parse(admin);
  } catch {
    clearLS();

    return null;
  }

  return admin;
};

const getLSLocale = () => {
  const locale = getLSVariable("locale");

  switch (locale) {
    case LOCALES.FA_IR:
      return fa_IR;
    default:
      return fa_IR;
  }
};

const postWithLoading = async (dispatch, promise) => {
  clearMessageAction()(dispatch);
  setLoadingAction(true)(dispatch);
  const response = await promise;
  setLoadingAction(false)(dispatch);

  return response;
};

const showErrorResponse = (dispatch, response, render = true) => {
  try {
    setMessageAction(
      response.resultMessage,
      MESSAGE_TYPES.ERROR,
      response.resultCode,
      render,
      render ? response.resultData?.key : null
    )(dispatch);
  } catch {}
};

const showFieldErrorMessage = (dispatch, message, field) => {
  try {
    setMessageAction(
      message,
      MESSAGE_TYPES.ERROR,
      MESSAGE_CODES.FORM_INPUT_INVALID,
      true,
      field
    )(dispatch);
  } catch {}
};

const showErrorMessage = (dispatch, message) => {
  try {
    setMessageAction(
      message,
      MESSAGE_TYPES.ERROR,
      MESSAGE_CODES.CLIENT_ERROR,
      false,
      null
    )(dispatch);
  } catch {}
};

const en2faDigits = (s) =>
  s
    ?.toString()
    .replace(/[0-9]/g, (w) => String.fromCharCode(w.charCodeAt(0) + 1728)) ??
  "";

const fa2enDigits = (num) => {
  if (num === null || num === undefined) {
    return null;
  }

  if (typeof num !== "string" || num.length === 0) {
    return num.toString();
  }

  let faDigits = "۰۱۲۳۴۵۶۷۸۹";
  let arDigits = "٠١٢٣٤٥٦٧٨٩";
  let output = "";

  for (let ipos = 0; ipos < num.length; ipos++) {
    let faIndex = faDigits.indexOf(num[ipos]);

    if (faIndex >= 0) {
      output += faIndex.toString();
      continue;
    }

    let arIndex = arDigits.indexOf(num[ipos]);

    if (arIndex >= 0) {
      output += arIndex.toString();
      continue;
    }

    output += num[ipos];
  }

  return output.replace(/,/g, "");
};

const localeDigits = (s) => {
  const locale = getLSVariable("locale");

  if (locale === LOCALES.FA_IR) {
    return en2faDigits(s);
  }

  return s;
};

const getExtension = (filename) => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

const navigateWithErrorMessage = (dispatch, navigate, url, message) => {
  setMessageAction(
    message,
    MESSAGE_TYPES.ERROR,
    MESSAGE_CODES.CLIENT_ERROR,
    false
  )(dispatch);
  navigate(url);
};

const isId = (id) => !isNaN(parseInt(id)) && id > 0;

const isUUID = (uuid) =>
  /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi.test(
    uuid
  );

const onValidationError = (useForm, dispatch) => {
  if (
    typeof useForm?.formState?.errors === "object" &&
    useForm?.formState?.errors
  ) {
    const hasKeys = !!Object.keys(useForm?.formState?.errors).length;

    if (hasKeys) {
      setMessageAction(
        useForm?.formState?.errors[Object.keys(useForm?.formState?.errors)[0]]
          .message,
        MESSAGE_TYPES.ERROR,
        MESSAGE_CODES.FORM_INPUT_INVALID,
        true,
        Object.keys(useForm?.formState?.errors)[0]
      )(dispatch);
    }
  }
};

const onValidationErrorWithoutField = (useForm, dispatch) => {
  if (
    typeof useForm?.formState?.errors === "object" &&
    useForm?.formState?.errors
  ) {
    const hasKeys = !!Object.keys(useForm?.formState?.errors).length;

    if (hasKeys) {
      setMessageAction(
        useForm?.formState?.errors[Object.keys(useForm?.formState?.errors)[0]]
          .message,
        MESSAGE_TYPES.ERROR,
        MESSAGE_CODES.FORM_INPUT_INVALID,
        true,
        null
      )(dispatch);
    }
  }
};

const getTimezoneDate = (date, locale) => {
  const d = new Date(new Date(date).getTime());
  const time = d.toString().substring(16, 21);

  return { date: toLocaleDateNumeric(d, locale), time };
};

const toLocaleDateNumeric = (date, locale) => {
  let options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  return new Date(date).toLocaleString(locale, options);
};

const jalaliToGregorian = (jDate) => {
  let parts = jDate.split("/");
  let jy = parseInt(parts[0]);
  let jm = parseInt(parts[1]);
  let jd = parseInt(parts[2]);
  jy += 1595;
  let days =
    -355668 +
    365 * jy +
    Math.floor(jy / 33) * 8 +
    Math.floor(((jy % 33) + 3) / 4) +
    jd +
    (jm < 7 ? (jm - 1) * 31 : (jm - 7) * 30 + 186);
  let gy = 400 * Math.floor(days / 146097);
  days %= 146097;

  if (days > 36524) {
    gy += 100 * Math.floor(--days / 36524);
    days %= 36524;

    if (days >= 365) days++;
  }

  gy += 4 * Math.floor(days / 1461);
  days %= 1461;

  if (days > 365) {
    gy += Math.floor((days - 1) / 365);
    days = (days - 1) % 365;
  }

  let gd = days + 1;
  let sal_a = [
    0,
    31,
    (gy % 4 == 0 && gy % 100 != 0) || gy % 400 == 0 ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];
  let gm = 0;

  for (gm = 0; gm < 13 && gd > sal_a[gm]; gm++) gd -= sal_a[gm];

  return [gy, gm, gd];
};

const jalaliToGregorianToString = (jDate) => {
  const parts = jalaliToGregorian(jDate);

  return `${parts[0]}-${parts[1] < 10 ? `0${parts[1]}` : `${parts[1]}`}-${
    parts[2] < 10 ? `0${parts[2]}` : `${parts[2]}`
  }`;
};

const throwIfNotValidId = (id, dispatch) => {
  const { general } = getLSLocale();

  if (!utils.isId(id)) {
    setMessageAction(
      general.itemNotFound,
      MESSAGE_TYPES.ERROR,
      MESSAGE_CODES.ITEM_NOT_FOUND,
      false
    )(dispatch);
    throw new Error();
  }
};

const throwIfNotValidUUID = (uuid, dispatch) => {
  const { general } = getLSLocale();
  const regexExp =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  if (!regexExp.test(uuid)) {
    setMessageAction(
      general.itemNotFound,
      MESSAGE_TYPES.ERROR,
      MESSAGE_CODES.ITEM_NOT_FOUND,
      false
    )(dispatch);
    throw new Error();
  }
};

const utils = {
  isJsonString,
  initLocale,
  clearLS,
  getLSVariable,
  setLSVariable,
  getLSToken,
  getLSAdmin,
  getLSLocale,
  postWithLoading,
  showErrorResponse,
  showFieldErrorMessage,
  showErrorMessage,
  en2faDigits,
  fa2enDigits,
  localeDigits,
  getExtension,
  navigateWithErrorMessage,
  isId,
  isUUID,
  onValidationError,
  onValidationErrorWithoutField,
  getTimezoneDate,
  jalaliToGregorian,
  jalaliToGregorianToString,
  throwIfNotValidId,
  throwIfNotValidUUID,
};

export default utils;
