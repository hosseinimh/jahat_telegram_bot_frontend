import { ENV } from "../../../config";
import { post } from "../../../lib";

export const fetchInfo = async (groupId) =>
  await post(`${ENV.apiEndpoint}/report/${groupId}`);
