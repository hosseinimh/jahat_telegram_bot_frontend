import { ENV } from "../../../config";
import { post } from "../../../lib";

export const add = async (error, errorInfo) =>
  await post(`${ENV.apiEndpoint}/errors/store`, {
    error,
    error_info: errorInfo,
  });
