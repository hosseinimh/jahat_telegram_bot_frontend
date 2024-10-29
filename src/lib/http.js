import axios from "axios";

import { API_RESPONSE_CODES } from "../types";
import utils from "../utils";
import { ENV } from "../config";

axios.defaults.withCredentials = true;

const { general } = utils.getLSLocale();

const createConfig = () => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return config;
};

const createErrorResponse = (code, message, data = null) => {
  return {
    result: "0",
    resultCode: code,
    resultMessage: message,
    resultData: data,
  };
};

const handlePost = async (url, data = null, withToken = true) => {
  return await axios.post(url, data, withToken ? createConfig() : null);
};

const handleResponse = (response) => {
  try {
    if (!utils.isJsonString(response) || !utils.isJsonString(response.data)) {
      return createErrorResponse(API_RESPONSE_CODES.RESPONSE_INVALID, "");
    }

    if (response.data.result !== "1") {
      navigateIfNotPrivilleged(response.data.resultCode);

      return createErrorResponse(
        response.data.resultCode,
        response.data.resultMessage,
        response.data.resultData
      );
    }

    return response.data;
  } catch (error) {
    console.log(error);
    return createErrorResponse(API_RESPONSE_CODES.CLIENT_ERROR, error.message);
  }
};

const handleError = (error) => {
  try {
    if (error.message === "Network Error") {
      return createErrorResponse(
        API_RESPONSE_CODES.CLIENT_ERROR,
        general.networkError
      );
    }

    return createErrorResponse(API_RESPONSE_CODES.CLIENT_ERROR, error.message);
  } catch {}

  return createErrorResponse(
    API_RESPONSE_CODES.CLIENT_ERROR,
    general.unknownError
  );
};

const navigateIfNotPrivilleged = (resultCode) => {
  if (resultCode === API_RESPONSE_CODES.TOKEN_EXPIRED) {
    logout();
    setTimeout(() => {
      window.location.href = ENV.loginPage;
    }, 2000);
  } else if (resultCode === API_RESPONSE_CODES.ADMIN_NOT_AUTHORIZED) {
    history.back();
  }
};

const logout = () => {
  try {
    utils.clearLS();
  } catch (error) {
    console.log(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const response = await handlePost(url, data);

    return handleResponse(response);
  } catch (error) {
    return handleError(error);
  }
};
